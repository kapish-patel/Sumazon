import Trending from "./trending"
import Seasons from "./seasons"
import Category from "./category"
import './body.css'

function Body() {
    return (
      <>
        <div className="body_container">
          <Seasons />
          <Trending />
          <Category />
        </div>
      </>
    )
  }
  
  export default Body
  