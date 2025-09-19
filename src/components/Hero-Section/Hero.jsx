import './Hero.css'
import protrait from './images/protrait.jpg'
import Avatar from './Avatar.jsx'
import ContentBox from './ContentBox.jsx'
import SocialCard from './SocialCard.jsx'

const socialsData = [
  { value: '2M+', text: 'Content Views' },
  { value: '50k+', text: 'Students Taught' },
  { value: '100+', text: 'Brands Collaborated' },
  { value: '4.7', text: 'Average Rating', icon: 'fa-solid fa-star' }
]

function Hero() {
  return (
    <div className="container">
      <Avatar photo={protrait} text="PRO" />
      <ContentBox
        title="Tomilola Valour"
        profession="Front-end Web Developer, & Software Engineer"
        about="Passionate about creating beautiful digital experiences
         and sharing creative inspiration with the world. Follow me across
          platforms for design tips, tutorials, and behind-the-scenes content."
      />
      <div className="socials-box">
        {socialsData.map((card) => (
          <SocialCard value={card.value} text={card.text} icon={card.icon} />
        ))}
      </div>
    </div>
  )
}

export default Hero
