import { FC } from 'react';
import CopyIcon from '../../../copyIcon';
import './DataInput.scss';
import { DataInputProps } from './interface';

const DataPlaceholder: FC<DataInputProps> = ({ title, data }) => {
   return (
      <div id="dataInputStypeWrapper"> 
         <span id="title">{title || 'عنوان'}</span>    
         <span id="data">{data}</span>  
         <CopyIcon    
            color={`#248094`}           
            data={data}       
            width={'2.5rem'}     
            height={'2.5rem'}  
         />
      </div>
   );
};

export default DataPlaceholder;
