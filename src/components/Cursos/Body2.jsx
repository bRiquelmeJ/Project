import '../../Styles/pCursos.css';
import S from '../../img/iconos/S.svg';
import T from '../../img/iconos/T.svg';
import E from '../../img/iconos/E.svg';
import M from '../../img/iconos/M.svg';

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
                    
                <div class="main">
  <div class="up">
    <button class="card1">
    <img src={S} alt='icono S' className="instagram" fillRule="nonzero" height="50px" width="50px" viewBox="0 0 256 256" />
<g style={{ mixBlendMode: 'normal' }} text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero"><g transform="scale(8,8)">
    </g></g>
    </button>
    <button class="card2">
    <img src={T} alt='icono T' className="facebook" fillRule="nonzero" height="50px" width="50px" viewBox="0 0 24 24" />
    </button>
  </div>
  <div class="down">
    <button class="card3">
    <img src={E} alt='icono T' className="whatsapp" fillRule="nonzero" height="50px" width="50px" viewBox="0 0 24 24"/>
    </button>
    <button class="card4">
    <img src={M} alt='icono M' className="gmail" fillRule="nonzero" height="50px" width="50px" viewBox="0 0 24 24"/>
    </button>
  </div>
</div>
                    
                </div>
            </div>
        
            </div>
        </div>
)}
export default Body2;