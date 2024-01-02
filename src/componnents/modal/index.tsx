// node
import React, { useState, useEffect } from 'react';
import { PropsModal } from './props.interface';
import './scss/modal.scss';

// component modal
const Modal: React.FC<PropsModal> = (props: PropsModal) => {
  let [open, setOpen] = useState<boolean>(false);
  // use effect
  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);
  return (
    <>
      {open && (
        <div
          className={`default-modal-wrapper ${
            props.wrapperClassName ? props.wrapperClassName : ''
          }`}
          id={`${props.wrapperId ? props.wrapperId : ''}`}
          onClick={() => {
            setOpen((open) => !open);
            props.onClose();
          }}
        >
          <div
            className={`default-modal-wrapper__content-div ${
              props.className ? props.className : ''
            }`}
            id={`${props.id ? props.id : ''}`}
            style={props.style}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              event.stopPropagation();
            }}
          >
            {props.content}
          </div>
        </div>
      )}
    </>
  );
};
// export
export default Modal;
