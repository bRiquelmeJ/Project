
import TryEngineering from '../../img/recurs/TryEngineering.png'
export default function ModalContentE({ onClose }) {
    const toTryEngineering = () => {
        window.open("https://tryengineering.org/es/students/", "_blank");
    
    };
    return (
    <div className="modal">
            
        
        <div class="card-group">
            <div className="card" style={{ width: '18rem' }} onClick={toTryEngineering}>
            <img src={TryEngineering} 
                alt="tryengineering"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title"> TryEngineering </p>
                <p class="card__description" >Recursos educativos para estudiantes. Explora la ingeniería a través de actividades prácticas y desafíos.</p>
                </div>
            </div>

        
            
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    </div>
    );
}