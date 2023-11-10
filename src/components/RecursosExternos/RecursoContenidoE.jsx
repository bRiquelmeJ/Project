
import TryEngineering from '../../img/recurs/TryEngineering.png'
export default function ModalContentE({ onClose }) {
    const toTryEngineering = () => {
        window.open("https://tryengineering.org/es/students/", "_blank");
    
    };
    return (
    <div className="modal">
            
        
        <div class="card-group">
            <div className="card" style={{ width: '18rem' }}>
            <img src={TryEngineering} 
                alt="tryengineering"
                onClick={toTryEngineering}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div className="card-body">
                    <p className="card-text" >Recursos educativos para estudiantes. Explora la ingeniería a través de actividades prácticas y desafíos.</p>
                </div>
            </div>

        
            
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    </div>
    );
}