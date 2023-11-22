import React from 'react';
import Biologia from '../../../pdf/Recurso de Biología copia.pdf'


export default function ModalContentInfo({ onClose }) {
return (
    <div className="modal-1">

            <iframe
                title="PDF Viewer"
                src={Biologia}
                width="100%"
                height="500px"
            >
                
            </iframe>


        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
</div>
    );
}