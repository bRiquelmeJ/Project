
export default function ModalContentT({ onClose }) {
    return (
    <div className="modal">
        <div> Contenido por poner Tecnologia</div>
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    );
}