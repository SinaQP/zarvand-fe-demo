import { FC } from 'react';
import CopyIcon from '../../../copyIcon';
import './DataInput.scss';
import { DataInputProps } from './interface';

const DataInput: FC<DataInputProps> = ({ title, data, theme, width }) => {
   return (
      <div
         id="dataInputStypeWrapper"
         className={`${theme === 'secondary' ? 'secondary' : ''} ${
            !width ? 'staticWidth' : ''
         }`}
         style={{ width: width || '' }}
      >
         <span id="title">{title || 'عنوان'}</span>
         <span>{data}</span>
         <CopyIcon color={`${theme === 'secondary' ? '#D3682B' : '#248094'}`} />
      </div>
   );
};

export default DataInput;
