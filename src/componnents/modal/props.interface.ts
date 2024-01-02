import { ReactElement } from 'react';

export interface PropsModal {
      content: ReactElement;
      show: boolean;
      onClose: () => any;
      wrapperClassName?: string;
      wrapperId?: string;
      className?: string;
      id?: string;
      style?: {};
}
