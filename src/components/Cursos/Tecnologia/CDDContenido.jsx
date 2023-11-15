
import ReactPlayer from 'react-player'
export default function ModalContentVideo({ onClose }) {

    return (
    
    <div className="modal">

            <ReactPlayer
            url={require('../../../video/Recurso-video-CDD.mp4')}
            className='react-player'
            playing
            width='100%'
            height='100%'
            controls= 'false'
            />


        <button onClick={onClose}  type="button" className="btn-close" aria-label="Close"></button>
    </div>
    );
}