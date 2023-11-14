
import Khan from '../../img/recurs/Khan-Academy.jpg'
import MicroMundo from '../../img/recurs/MicroMundo.png'
export default function ModalContentS({ onClose }) {
    const toKhanAcademy = () => {
        window.open("https://www.khanacademy.org/", "_blank");
    
    };
    const toMicroMundo = () => {
        window.open("https://micromundo.team/", "_blank");
    };
    return (
    
    <div className="modal">
        
        <div class="card-group">
            <div className="card" style={{ width: '18rem' }} onClick={toKhanAcademy}>
            <img src={Khan} 
                alt="Khan Academy"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title">
                    Khan Academy
                </p>
                <p class="card__description">Plataforma educativa global, ofrece cursos gratuitos, recursos interactivos, aprendizaje personalizado.</p>
                </div>
            </div>
            

            
            <div class="card" onClick={toMicroMundo}>
                <img src={MicroMundo} 
                alt="MicroMundo"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title">
                    MicroMundo 
                </p>
                <p class="card__description">Microscopia Virtual, Plataforma multimedia, Actividades & Talleres</p>
                </div>
            </div>
            
            </div>
        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    );
}



