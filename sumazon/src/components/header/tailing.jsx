import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../common/common.css'

function Tailing() {
  return (
    <div className="tailing_component">
      {/* search component */}
      <div className="search_container">
        <div className="icon_container">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search_bar_container">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* favourite component */}
      <div className="icon_container">
        <FontAwesomeIcon icon={faStar} />
      </div>

      {/* cart component */}
      <div className="icon_container">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      {/* User component */}
      <div className="icon_container">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  )
}

export default Tailing
