
import FreeCodeCamp from '../../img/recurs/FreeCodeCamp.jpg'
import BlockyGames from '../../img/recurs/Blocky-Games.jpg'
import Scratch from '../../img/recurs/Scratch.png'
export default function ModalContentT({ onClose }) {
    const toFreeCodeCamp = () => {
        window.open("https://www.freecodecamp.org/espanol/", "_blank");
    
    };
    const toBlockyGames = () => {
        window.open("https://blockly.games/", "_blank");
    
    };
    const toScratch = () => {
        window.open("https://scratch.mit.edu/", "_blank")
    }
    

    return (
        <div className="modal">
            
        
        <div class="card-group">
            <div className="card" style={{ width: '18rem' }}>
            <img src={FreeCodeCamp} 
                alt="FreeCodeCamp"
                onClick={toFreeCodeCamp}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div className="card-body">
                    <p className="card-text" >Plataforma educativa, aprendizaje de desarrollo web gratuito.</p>
                </div>
            </div>

        
            <div className="card" style={{ width: '10rem' }}>
            <img src={BlockyGames} 
                alt="Blocky-Games"
                onClick={toBlockyGames}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div class="card-body">
                    <p class="card-text"> Plataforma interactiva para aprender programación mediante bloques visuales y divertidos desafíos.</p>
                </div>
            </div>
            <div className="card" style={{ width: '10rem' }}>
            <img src={Scratch} 
                alt="Scratch"
                onClick={toScratch}
                style={{ cursor: "pointer" }}
                className="card-img-top"
                />
                <div class="card-body">
                    <p class="card-text">Plataforma creativa de programación para niños. Crea historias, juegos y animaciones visualmente.</p>
                </div>
            </div>
    </div> 
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    );
}