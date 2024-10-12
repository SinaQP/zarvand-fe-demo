import { FC } from 'react';
import CopyIcon from '../../../../../copyIcon';
import './DataInput.scss';

const DataInput: FC<{ title: string; data: string | number }> = ({
   title,
   data,
}) => {
   return (
      <div id="dataInputStypeWrapper">
         <span id='title'>{title || 'عنوان'}</span>
         <span>{data}</span>
         <CopyIcon color="#248094" />
      </div>
   );
};

export default DataInput;
