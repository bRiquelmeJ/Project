import '../body.css';
import MujerSTEM from '../img/STEMimg.jpg'

function Body2(){

return(
    <div class="container text-center">
            <div class="row">
            <div class="col order-first">
                <div className="news-activities">
                    <div className="news-activities-text">
                    <h2>Noticias y actividades</h2> 
                    </div>
                </div> 
            </div>
            <div class="col order-last">
                <div>
                    <a>
                        <img src={MujerSTEM} alt="Mujeres en STEM" className="img-mujeres-stem"/>
                    </a>
                </div>
            </div>
        
            </div>
        </div>
)}
export default Body2;