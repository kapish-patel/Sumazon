import SpringMan from "../../assets/spring_man.jpg";
import SpringWomen from "../../assets/spring_women.jpg";

function Seasons() {
  return (
    <div className="seasons_component">
      <div className="seasons_image_container">
        <div className="image_container">
          <img src={SpringMan} alt="men spring clothing"/>
        </div>
        <div className="image_container">
          <img src={SpringWomen} alt="women spring clothing"/>
        </div>
      </div>
      <div className="seasons_info_container">
        <p id="info_heading">Revitalize Your Wardrobe</p>
        <p id="info_text">Spring into Style with Our Fresh Finds!</p>
        <button id="season_collection_btn">Browse Collection</button>
      </div>
    </div>
  )
}

export default Seasons
