import { useContext, useEffect, useRef, useState } from 'react';
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

   const history = useHistory();
   const [printCharge, setPrintCharge] = useState<boolean>(false);
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
                     onClick={() => setPrintCharge(true)}
                  >
                     چاپ
                  </Button>
                  {printCharge && (
                     <RnvChargePdf data={undefined} onlyShow={false} />
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
