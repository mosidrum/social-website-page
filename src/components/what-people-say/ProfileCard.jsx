import './ProfileCard.css'

const heading = (
  <h1 className="profile-heading">
    What people say
    <p>Feedback from followers, students, and collaborators</p>
  </h1>
)

const ProfileCard = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* <img src={props.image} alt="" /> */}
        <img src={props.image} alt={props.name} />
        <div className="profile-description">{props.description}</div>
        <div className="name">{props.name}</div>
        <div className="profile-Job">{props.job}</div>
        <div className="profile-Title">{props.Title}</div>
      </div>
    </div>
  )
}

export { heading }
export default ProfileCard