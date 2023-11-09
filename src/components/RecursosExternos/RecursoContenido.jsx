
export default function ModalContent({ onClose }) {
    return (
    <div className="modal">
        <div>Contenido por poner</div>
        <button onClick={onClose}>Cerrar</button>
    </div>
    );
}