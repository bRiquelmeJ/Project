
export default function ModalContentM({ onClose }) {
    return (
    <div className="modal">
        <div> Contenido por poner Matematica</div>
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    );
}