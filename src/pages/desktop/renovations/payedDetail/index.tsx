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
import RnvChargePdf from '../rnvChargePdf';
import { useReactToPrint } from 'react-to-print';

const RenovationPayedDetail = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail } =
      useContext(AppContext);
   const componentRef = useRef<HTMLDivElement>(null);
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });
   const history = useHistory();
   const [printCharge, setPrintCharge] = useState<boolean>(false);
   useEffect(() => {
      if (!token) history.push('');
   }, [token, history]);
   const ComponentToPrint = React.forwardRef((props, ref: any) => (
      <div ref={ref}>
         <h1>Hello, world!</h1>
      </div>
   ));
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
                     onClick={handlePrint}
                  >
                     چاپ
                  </Button>

                  {/* <RnvChargePdf
                     componentRef={componentRef}
                     data={undefined}
                     onlyShow={true}
                  /> */}
                  <ComponentToPrint ref={componentRef} />
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
