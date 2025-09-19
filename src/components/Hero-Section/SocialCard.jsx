function SocialCard({ value, text, icon }) {
  return (
    <div className="socials-card">
      <h3>
        {value} <i className={icon}></i>
      </h3>
      <p>{text}</p>
    </div>
  )
}

export default SocialCard
