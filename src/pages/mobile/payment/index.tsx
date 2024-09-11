import { FC, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import Charges from '../../../containers/mobile/payment/charges';
import Button from '../../../componnents/button';
import Amounts from '../../../containers/mobile/payment/amounts';
import RenovationCard from '../../../componnents/renovationCard';
import { useReactToPrint } from 'react-to-print';
import { getRnvPrintData } from '../../../apis/renovation/print';
import { BillPrintProps } from '../../../componnents/pdfs/rnvChargePdf/index.interface';
import RnvChargePdf from '../../../componnents/pdfs/rnvChargePdf';

const Payment: FC = () => {
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
         const { body, status } = await getRnvPrintData(
            {
               last_paid_bill: false,
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
   }, [token]);
   useEffect(() => {
      const rnvChargePdfButton = document.getElementById(
         'rnv-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) rnvChargePdfButton.click();
   }, [isPrinting]);
   return (
      <div className="mobile-payment">
         <Header />
         <RenovationCard
            renovation={selectedCharge ? selectedCharge : emptyRenovation}
            lock
            viewOnly
            className="mobile-payment__card"
         />
         <Charges bill={selectedRenovationBillDetail} />
         <Amounts
            bill_no={
               selectedRenovationBillDetail
                  ? selectedRenovationBillDetail.bill_no
                  : ''
            }
            payment_no={
               selectedRenovationBillDetail
                  ? selectedRenovationBillDetail.payment_no
                  : ''
            }
            value_to_pay={
               selectedRenovationBillDetail
                  ? selectedRenovationBillDetail.value_to_pay
                  : 0
            }
         />
         {selectedRenovationBillDetail &&
            selectedRenovationBillDetail.bill_details.length > 0 && (
               <Button
                  className="mobile-payment__button"
                  onClick={() => history.push('/payed-detail/renovation')}
               >
                  مشاهده سابقه پرداخت
               </Button>
            )}
         <Button className="mobile-payment__button">پرداخت</Button>
         <Button
            className="rnv-payment__button rnv-payment__button--print"
            onClick={printChargeHandler}
            id="rnv-charge-pdf-button"
         >
            چاپ
         </Button>
         {isPrinting &&
            printBill &&
            selectedCharge &&
            selectedRenovationBillDetail &&
            user && (
               <RnvChargePdf
                  componentRef={componentRef}
                  data={{
                     bill_details: selectedRenovationBillDetail.charges_by_year,
                     address: selectedCharge.address,
                     postal_code: printBill.postal_code,
                     certificate_number: selectedCharge.certificate_number,
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

export default Payment;
