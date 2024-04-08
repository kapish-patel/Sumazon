import './footer.css'
import Promotion from './promotion'
import Company from './company'
import Help from './help'
import Copyright from './copyright'

function Footer() {
    return (
      <>
        <div className="footer_container">
          <div className="footer_top">
            <Help />
            <Company />
            <Promotion />
          </div>
          <div className="footer_bottom">
            <Copyright />
          </div>
        </div>
      </>
    )
  }
  
  export default Footer
  