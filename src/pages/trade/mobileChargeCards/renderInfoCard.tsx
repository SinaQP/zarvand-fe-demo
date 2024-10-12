import InfoCard from '../../../components/infoCard';
import InfoCardTitle from '../infoCardTitle';
import styles from '../index.module.scss';
import { TradeCharge } from '../../../interfaces/models.interface';

export const renderInfoCard = (charge: TradeCharge) => (
   <InfoCard
      isPrimary={charge.is_paid}
      title={<InfoCardTitle />}
      className={styles['trade-type-card']}
      containerClassName={styles['info-card']}
   >
      {charge.TradeType}
   </InfoCard>
);
