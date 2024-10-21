import { useChargesContext } from '../../../../App.context';
import CertificationNumberCard from '../../../../components/certificationNumberCard';
import './infoCardBody.scss';

const InfoCardBody = () => {
   const { selectedRenovationCharge } = useChargesContext();
   if (!selectedRenovationCharge) return null;
   return (
      <div id="RenovationInfoCardStyleWrapper">
         <div>
            <CertificationNumberCard
               charge={selectedRenovationCharge}
            ></CertificationNumberCard>
         </div>

         <div id="botContent"></div>
      </div>
   );
};

export default InfoCardBody;
