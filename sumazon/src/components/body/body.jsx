import Trending from "./trending"
import Seasons from "./seasons"
import Category from "./category"
import './body.css'

function Body() {
    return (
      <div className="body_container">
        <Seasons />
        <div className="crousels_component">
          <Category />
          <Trending />
        </div>
      </div>
    )
  }
  
  export default Body
  