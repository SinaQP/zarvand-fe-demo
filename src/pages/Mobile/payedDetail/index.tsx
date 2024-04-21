import { FC, useContext, useEffect } from 'react';
import Header from '../../../containers/mobile/payment/header';
import { AppContext } from '../../../App.context';
import { useHistory } from 'react-router-dom';
import Button from '../../../componnents/button';
import RenovationCard from '../../../componnents/renovationCard';
import { separateByThree } from '../../../utilities/separatetByThree';

const PayedDetail: FC = () => {
   const emptyRenovation = {
      address: '',
      certificate_number: '',
      is_paid: false,
      master_id: '',
   };
   const { token, selectedCharge, selectedRenovationBillDetail } =
      useContext(AppContext);
   const history = useHistory();

   useEffect(() => {
      if (!token) history.push('/');
   }, [token]);

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

         {/* <Button className="mobile-payed-detail__button" size="large">
            چاپ
         </Button> */}
      </div>
   );
};

export default PayedDetail;
