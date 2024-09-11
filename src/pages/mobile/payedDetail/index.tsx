import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import RenovationCard from '../../../componnents/renovationCard';
import { separateByThree } from '../../../utilities/separatetByThree';
import { useReactToPrint } from 'react-to-print';
import { BillPrintProps } from '../../../componnents/pdfs/rnvChargePdf/index.interface';
import { getRnvPrintData } from '../../../apis/renovation/print';
import Button from '../../../componnents/button';
import RnvChargePdf from '../../../componnents/pdfs/rnvChargePdf';

const PayedDetail: FC = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
      postal_code: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail, user } =
      useContext(AppContext);
   const history = useHistory();
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<BillPrintProps | null>(null);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onAfterPrint: () => setIsPrinting(false),
   });
   const printChargeHandler = async () => {
      if (selectedCharge) {
         console.log(selectedCharge);
         console.log(selectedCharge);
         const { body, status } = await getRnvPrintData(
            {
               last_paid_bill: true,
               master_id: selectedCharge.master_id,
            },
            token,
         );

         if (status === 200) setPrintBill(body);
      }
      setIsPrinting(true);
      handlePrint();
   };
   useEffect(() => {
      if (!token) history.push('/');
   }, [token, history]);
   useEffect(() => {
      const rnvChargePdfButton = document.getElementById(
         'rnv-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) rnvChargePdfButton.click();
   }, [isPrinting]);
   return (
      <div className="mobile-payed-detail">
         <Header />
         <RenovationCard
            renovation={selectedCharge ? selectedCharge : emptyRenovation}
            lock
            viewOnly
            className="mobile-payed-detail__card"
         />
         <div className="mobile-payed-detail__charges">
            {selectedRenovationBillDetail
               ? selectedRenovationBillDetail.bill_details.map((charge) => {
                    return (
                       <>
                          <div className="mobile-payed-detail__charges-header">
                             <div className="mobile-payed-detail__charges-colume">
                                <span>از سال: </span>
                                <span>{charge.from_year}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>تا سال: </span>
                                <span>{charge.to_year}</span>
                             </div>
                          </div>
                          <div className="mobile-payed-detail__charges-row">
                             <div className="mobile-payed-detail__charges-colume">
                                <span>مبلغ ريال: </span>
                                <span>
                                   {separateByThree(
                                      charge.penalty > 0
                                         ? charge.penalty
                                         : charge.creditor,
                                   )}
                                </span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>توضیحات: </span>
                                <span>
                                   {charge.penalty > 0
                                      ? 'جریمه دیرکرد'
                                      : charge.incomecode_desc}
                                </span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>شماره قبض: </span>
                                <span>{charge.bill_code}</span>
                             </div>
                             <div className="mobile-payed-detail__charges-colume">
                                <span>کدقبض: </span>
                                <span>{charge.payment_date}</span>
                             </div>
                          </div>
                       </>
                    );
                 })
               : ''}
         </div>

         <Button
            className="mobile-payed-detail__button"
            id="rnv-charge-pdf-button"
            onClick={printChargeHandler}
         >
            چاپ
         </Button>

         {isPrinting &&
            selectedCharge &&
            selectedRenovationBillDetail &&
            printBill &&
            user && (
               <RnvChargePdf
                  componentRef={componentRef}
                  data={{
                     address: selectedCharge.address,
                     postal_code: selectedCharge.postal_code,
                     bill_details: selectedRenovationBillDetail.bill_details
                        .filter((bd) => bd.is_annual_charges)
                        .map((bd) => {
                           return [
                              `${bd.from_year} تا ${bd.to_year}`,
                              bd.creditor,
                           ];
                        }),
                     certificate_number: '',
                     id: selectedCharge.master_id,
                     last_bill_id: 1,
                     person: {
                        name: user.name,
                        mobile_Number: user.mobile_number,
                        national_code: user.national_code,
                     },
                  }}
                  printBill={printBill}
                  onlyShow={false}
               />
            )}
      </div>
   );
};

export default PayedDetail;
