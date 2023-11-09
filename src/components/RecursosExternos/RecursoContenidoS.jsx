
export default function ModalContentS({ onClose }) {
    return (
    <div className="modal">
        <div> Contenido por poner Ciencias</div>
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    );
}