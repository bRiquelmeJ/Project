

export default function ModalContentInfo({ onClose }) {

    return (
    
    <div className="modal">
        <h1>Info Quimica</h1>

        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    );
}