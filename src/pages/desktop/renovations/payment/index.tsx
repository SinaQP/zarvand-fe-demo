import Layout from '../../containers/layout';
import Amounts from './amounts';
import Header from './header';
import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../App.context';
import { separateByThree } from '../../../../utilities/separatetByThree';
import ExtraDetails from './extraDetails';
import RenovationCard from '../../../../componnents/renovationCard';
import Button from '../../../../componnents/button';
import './index.scss';
import { PrintBill } from '../../../../componnents/pdfs/trdChargePdf/index.interface';
import { useReactToPrint } from 'react-to-print';
import { BillPrintProps } from '../../../../componnents/pdfs/rnvChargePdf/index.interface';
import { getRnvPrintData } from '../../../../apis/renovation/print';
import RnvChargePdf from '../../../../componnents/pdfs/rnvChargePdf';

const RnvPayment = () => {
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
      if (!token) history.push('');
   }, [token, history]);
   useEffect(() => {
      const rnvChargePdfButton = document.getElementById(
         'rnv-charge-pdf-button',
      )! as HTMLButtonElement;
      if (isPrinting) rnvChargePdfButton.click();
   }, [isPrinting]);
   return (
      <Layout>
         <div className="rnv-payment">
            <Header />
            <div className="rnv-payment__container">
               <div className="rnv-payment__colume">
                  <RenovationCard
                     className="rnv-payment__card"
                     lock
                     viewOnly
                     renovation={
                        selectedCharge ? selectedCharge : emptyRenovation
                     }
                  />
                  <Button
                     className="rnv-payment__button rnv-payment__button--print"
                     onClick={printChargeHandler}
                     id="rnv-charge-pdf-button"
                  >
                     چاپ
                  </Button>
               </div>
               <div className="rnv-payment__colume">
                  <div className="rnv-payment__charges">
                     <div className="rnv-payment__charges-header">
                        <span>از سال</span>
                        <span>تا سال</span>
                        <span>مبلغ(ريال)</span>
                        <span>توضیحات</span>
                     </div>
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.charges_by_year.map(
                             (charge) => (
                                <div className="rnv-payment__charges-row">
                                   <span>{charge[0]}</span>
                                   <span>{charge[0]}</span>
                                   <span>{separateByThree(charge[1])}</span>
                                   <span>عوارض سالیانه</span>
                                </div>
                             ),
                          )
                        : ''}

                     {selectedRenovationBillDetail && <ExtraDetails />}
                  </div>
               </div>
               <div className="rnv-payment__colume">
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
                  <div className="rnv-payment__buttons">
                     {selectedRenovationBillDetail &&
                        selectedRenovationBillDetail.bill_details.length >
                           0 && (
                           <Button
                              className="rnv-payment__button rnv-payment__button--outline"
                              onClick={() =>
                                 history.push('/payed-detail/renovation')
                              }
                           >
                              مشاهده سابقه پرداخت
                           </Button>
                        )}
                     <Button className="rnv-payment__button">پرداخت</Button>
                     {isPrinting &&
                        printBill &&
                        selectedCharge &&
                        selectedRenovationBillDetail &&
                        user && (
                           <RnvChargePdf
                              componentRef={componentRef}
                              data={{
                                 bill_details:
                                    selectedRenovationBillDetail.charges_by_year,
                                 address: selectedCharge.address,
                                 postal_code: printBill.postal_code,
                                 certificate_number:
                                    selectedCharge.certificate_number,
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
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default RnvPayment;
