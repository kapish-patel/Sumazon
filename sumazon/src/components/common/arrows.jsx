import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './common.css';

function Arrows() {
  return (
        <div className="arrows_container">
            <div className="icon_container">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="icon_container">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default Arrows
