import React from 'react';

interface ComponentProps {
  setVisible: React.Dispatch<boolean>;
}

interface ModalProps {
  component: React.ComponentType<ComponentProps>;
  closable?: boolean;
  centered?: boolean;
  visible: boolean;
  setVisible: React.Dispatch<boolean>;
}

const Modal = ({
  component: Component,
  closable = true,
  centered = false,
  visible,
  setVisible,
  ...props
}: ModalProps): React.ReactElement => {
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <div
      className={`modal-wrapper${visible ? '' : ' hidden'}${
        centered ? ' centered' : ''
      }`}
      onClick={closable ? () => setVisible(false) : () => null}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Component setVisible={setVisible} {...props} />
        {closable && (
          <div className="close-button" onClick={closeModal}>
            &times;
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
