
import Cokitos from '../../img/recurs/Cokitos.png'
import Cerebriti from '../../img/recurs/Cerebrite.png'
export default function ModalContentM({ onClose }) {
    const toCokitos = () => {
        window.open("https://www.cokitos.com/tag/juegos-de-matematicas","_blank");
    
    };
    const toCerebriti = () => {
        window.open("https://www.cerebriti.com/juegos-de-matematicas/","_blank");
    
    };
    return (
    <div className="modal">
        <div class="card-group">
            <div className="card" style={{ width: '18rem' }}>
            <img src={Cokitos} 
                alt="Cokitos"
                onClick={toCokitos}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div className="card-body">
                    <p className="card-text" > Juegos de matemáticas para niños, aprendizaje divertido y educativo en línea.</p>
                </div>
            </div>

        
            <div className="card" style={{ width: '10rem' }}>
            <img src={Cerebriti} 
                alt="Khan Academy"
                onClick={toCerebriti}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div class="card-body">
                    <p class="card-text"> Plataforma educativa con juegos y actividades para el aprendizaje interactivo y personalizado</p>
                </div>
            </div>
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    </div>
    );
}