import './Hero.css';
import protrait from './images/protrait.jpg';
import Avatar from './Avatar.jsx';
import ContentBox from './ContentBox.jsx';
import SocialCard from './SocialCard.jsx';

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
        <SocialCard value="2M+" text="Content Views" />
        <SocialCard value="50k+" text="Students Taught" />
        <SocialCard value="100+" text="Brands Collaborated" />
        <SocialCard value="4.7" text="Average Rating" icon="fa-solid fa-star" />
      </div>
    </div>
  );
}

export default Hero;
