
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
            
            <div className="card" style={{ width: '18rem' }} onClick={toFreeCodeCamp}>
            <img src={FreeCodeCamp} 
                alt="FreeCodeCamp"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title"> FreeCodeCamp </p>
                <p class="card__description"> Plataforma educativa, aprendizaje de desarrollo web gratuito.</p>
                </div>
            </div>

        
            <div className="card" style={{ width: '10rem' }} onClick={toBlockyGames}>
            
            <img src={BlockyGames} 
                alt="Blocky-Games"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title"> Blocky Games </p>
                    <p class="card__description"> Plataforma interactiva para aprender programación mediante bloques visuales y divertidos desafíos.</p>
                </div>
            </div>
            <div className="card" style={{ width: '10rem' }} onClick={toScratch}>
            <img src={Scratch} 
                alt="Scratch"
                style={{ cursor: "pointer" }}
                className="card-img-top"
                viewBox="0 0 24 24"
                />
                <div class="card__content">
                <p class="card__title"> Scratch </p>
                <p class="card__description">Plataforma creativa de programación para niños. Crea historias, juegos y animaciones visualmente.</p>
                </div>
            </div>
    </div> 
        <button onClick={onClose}  type="button" class="btn-close" aria-label="Close"></button>
    </div>
    );
}
