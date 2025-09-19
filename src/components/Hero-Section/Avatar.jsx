function Avatar({ photo, text }) {
  return (
    <div className="avatar">
      <img src={photo} alt={photo} />
      <span>{text}</span>
    </div>
  )
}

export default Avatar
