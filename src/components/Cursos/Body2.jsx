import React from 'react';
import '../../Styles/pCursos.css';
import MujerSTEM from "../../img/generales/STEMimg.jpg";
import { Link } from 'react-router-dom';
import Carreras from './Carreras';


function Body2(){

return(

    <div class="container text-center">
            <div class="row">
            <div class="col order-first">
                
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
            <div class="col order-last">

            </div>

            </div>
        </div>
)}
export default Body2;