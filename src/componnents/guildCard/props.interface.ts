import { Guild } from '../../App.context';

interface Props {
   className?: string;

   guild: Guild;
   lock?: boolean;
   viewOnly?: boolean;
}

export default Props;
