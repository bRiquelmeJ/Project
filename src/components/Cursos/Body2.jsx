import React from 'react';
import '../../Styles/pCursos.css';
import MujerSTEM from "../../img/STEMimg.jpg";
import { Link } from 'react-router-dom';
function Body2(){

return(

    <div class="container text-center">
            <div class="row">
            <div class="col order-first">
            <button class="learn-more mt-5"> Noticias y Actividades </button>
            </div>
            <div class="col order-last">
                <div>
                    <>
                    <Link to="/MujeresSTEM">
                        <img 
                        src={MujerSTEM} 
                        alt="Mujeres en STEM" 
                        className="img-mujeres-stem img-fluid imgZoom" />
                        </Link>  
                    </>
                </div>
            </div>

            </div>
        </div>
)}
export default Body2;