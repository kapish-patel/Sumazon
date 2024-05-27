import Trending from "./trending"
import Seasons from "./seasons"
import './body.css'

function Body() {
    return (
      <div className="body_container">
        <Seasons />
        <div className="crousels_component">
          <Trending />
        </div>
      </div>
    )
  }
  
  export default Body
  