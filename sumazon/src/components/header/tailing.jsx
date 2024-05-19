import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../common/common.css'

function Tailing() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  }

  const handleProfileClick = () => {
    navigate('/profile');
  }

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
      {/* cart component */}
      <div className="icon_container" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>

      {/* User component */}
      <div className="icon_container" onClick={handleProfileClick}>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  )
}

export default Tailing
