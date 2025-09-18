import "./FeaturedContentstyle.css";
import img from "./FCimages/image.png";
import imgone from "./FCimages/image1.jpg";
import imgtwo from "./FCimages/image2.jpg";
function FeaturedContent() {
  return (
    <div className="FContent">
      <div className="FCheading">
        <h1>Featured Content</h1>
        <p>Check out some of my popular content across diffrent platforms</p>
      </div>
      <div className="cardsContainer">
        <div className="card">
          <div className="imgContainer">
            <img className="cardImg" src={img}></img>
          </div>
          <div className="socialMedia">
            <span className="media">Youtube</span>
            <span className="views">125k views</span>
          </div>
          <div className="content">
            <h3>Design System Mastery</h3>
            <p>Complete guide to building scalable design system</p>
          </div>
        </div>
        <div className="card">
          <div className="imgContainer">
            <img className="cardImg" src={imgone}></img>
          </div>
          <div className="socialMedia">
            <span className="media">Youtube</span>
            <span className="views">125k views</span>
          </div>
          <div className="content">
            <h3>Design System Mastery</h3>
            <p>Complete guide to building scalable design system</p>
          </div>
        </div>
        <div className="card">
          <div className="imgContainer">
            <img className="cardImg" src={imgtwo}></img>
          </div>
          <div className="socialMedia">
            <span className="media">Youtube</span>
            <span className="views">125k views</span>
          </div>
          <div className="content">
            <h3>Design System Mastery</h3>
            <p>Complete guide to building scalable design system</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedContent;
