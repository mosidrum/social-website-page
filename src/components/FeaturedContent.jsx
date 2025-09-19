import './FeaturedContentstyle.css'
function FeaturedContent(props) {
  return (
    <div className="card">
      <div className="imgContainer">
        <img className="cardImg" src={props.image}></img>
      </div>
      <div className="social">
        <span className="media">{props.socialMedia}</span>
        <span className="views">{props.views}</span>
      </div>
      <div className="content">
        <h3>{props.contentHeading}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
export default FeaturedContent
