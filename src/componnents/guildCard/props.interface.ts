import { Guild } from '../../App.context';

interface Props {
   className?: string;

   guild: Guild;
   lock?: boolean;
   viewOnly?: boolean;
   isFromMobile?: boolean;
}

export default Props;
