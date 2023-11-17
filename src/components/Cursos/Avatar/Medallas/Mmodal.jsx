import React from 'react';
import "../../../../Styles/Mmodal.css"

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="modal-close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
