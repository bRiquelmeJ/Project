
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
            <div className="card" style={{ width: '18rem' }}>
            <img src={Khan} 
                alt="Khan Academy"
                onClick={toKhanAcademy}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div className="card-body">
                    <p className="card-text" >  Plataforma educativa global, ofrece cursos gratuitos, recursos interactivos, aprendizaje personalizado.</p>
                </div>
            </div>

        
            <div className="card" style={{ width: '10rem' }}>
            <img src={MicroMundo} 
                alt="Khan Academy"
                onClick={toMicroMundo}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div class="card-body">
                    <p class="card-text"> Microscopia Virtual, Plataforma multimedia, Actividades & Talleres</p>
                </div>
            </div>
        </div>

        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    );
}