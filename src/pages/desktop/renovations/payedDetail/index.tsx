import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../containers/layout';
import Header from './header';
import { AppContext } from '../../../../App.context';
import RenovationCard from '../../../../componnents/renovationCard';
import './index.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Button from '../../../../componnents/button';
import { useReactToPrint } from 'react-to-print';
import RnvChargePdf from '../../../../componnents/pdfs/rnvChargePdf';

const RenovationPayedDetail = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail, user } =
      useContext(AppContext);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });
   const [printCharge, setPrintCharge] = useState<boolean>(false);
   const history = useHistory();
   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);
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
                     onClick={() => {
                        console.log(
                           'selectedRenovationBillDetail',
                           selectedRenovationBillDetail,
                        );
                        console.log('selectedCharge', selectedCharge);
                        setPrintCharge(true);
                        handlePrint();
                     }}
                  >
                     نمایش قبض
                  </Button>

                  {printCharge && selectedCharge && user && (
                     <RnvChargePdf
                        componentRef={componentRef}
                        data={{
                           address: selectedCharge.address,
                           physical_state_id: { desc: '', id: 1 },
                           plate_number: 1,
                           postal_code: '',
                           special_services_cost: 1,
                           subdivision_date: '',
                           taking_possession_date: '',
                           usage_type_id: {
                              desc: '',
                              id: 1,
                              is_service_calculate: true,
                           },
                           bill_details: [],
                           certificate_number: '',
                           debt: 0,
                           exemption_percentage: 0,
                           first_year_of_calculation: 0,
                           id: selectedCharge.master_id,
                           is_deleted: false,
                           last_bill_id: 1,
                           last_year_of_payment: '1',
                           notice: '1',
                           penalty_percentage: 1,
                           person: {
                              name: user.name,
                              mobile_Number: user.mobile_number,
                              national_code: user.national_code,
                           },
                        }}
                        printBill={{
                           account_number: '',
                           annual_charges: 1,
                           bank_name: '',
                           bank_bill_subtitle: '',
                           bill_code: selectedRenovationBillDetail
                              ? selectedRenovationBillDetail?.bill_no
                              : 's',
                           bill_no: '',
                           building_area: 1,
                           city: '',
                           city_service: 1,
                           created_by_user_full_name: '',
                           dual_bill: true,
                           garbage_collection_service: 1,
                           income_unit_bill_subtitle: '',
                           issue_date: '',
                           land_area: 1,
                           payment_no: '',
                           penalty: 1,
                           reward: 1,
                           safety_service: 1,
                           total_amount: 1,
                           total_amount_in_words: '',
                        }}
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
