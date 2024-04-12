import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './common.css';

function Arrows() {
    const scrollLeft = () => {
        document.querySelector('.carousel').scrollLeft -= 500;
    }

    const scrollRight = () => {
        document.querySelector('.carousel').scrollLeft += 500;
    }
  return (
        <div className="arrows_container">
            <div className="icon_container" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="icon_container" onClick={scrollRight}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default Arrows
