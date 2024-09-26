import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './header';
import { AppContext } from '../../../../App.context';
import RenovationCard from '../../../../components/renovationCard';
import './index.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Button from '../../../../components/button';
import { useReactToPrint } from 'react-to-print';
import RnvChargePdf from '../../../../components/pdfs/rnvChargePdf';
import { BillPrintProps } from '../../../../components/pdfs/rnvChargePdf/index.interface';
import { getRnvPrintData } from '../../../../apis/renovation/print';
import Layout from '../../layout';

const RenovationPayedDetail = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
      postal_code: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail, user } =
      useContext(AppContext);
   const [isPrinting, setIsPrinting] = useState(false);
   const [printBill, setPrintBill] = useState<BillPrintProps | null>(null);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      onAfterPrint: () => setIsPrinting(false),
   });
   const printChargeHandler = async () => {
      if (selectedCharge && !printBill) {
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
   const history = useHistory();
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
         <div className="rnv-payed-detail">
            <Header />
            <div className="rnv-payed-detail__container">
               <div className="rnv-payed-detail__colume">
                  <RenovationCard
                     lock
                     viewOnly
                     renovation={
                        selectedCharge ? selectedCharge : emptyRenovation
                     }
                  />
                  <Button
                     className="rnv-payed-detail__print-button"
                     id="rnv-charge-pdf-button"
                     onClick={printChargeHandler}
                  >
                     نمایش قبض
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
                              postal_code: '',
                              bill_details:
                                 selectedRenovationBillDetail.bill_details
                                    .filter((bd) => bd.is_annual_charges)
                                    .map((bd) => {
                                       return bd.from_year !== bd.to_year
                                          ? [
                                               `${bd.from_year} تا ${bd.to_year}`,
                                               bd.creditor,
                                            ]
                                          : [bd.from_year, bd.creditor];
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
               <div className="rnv-payed-detail__colume rnv-payed-detail__colume--charges">
                  <div className="rnv-payed-detail__charges">
                     <TableHeader />
                     {selectedRenovationBillDetail
                        ? selectedRenovationBillDetail.bill_details.map(
                             (charge) => <TableRow charge={charge} />,
                          )
                        : ''}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default RenovationPayedDetail;
