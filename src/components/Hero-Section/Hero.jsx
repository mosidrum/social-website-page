import './Hero.css';
import protrait from './images/protrait.jpg';
import Avatar from './Avatar.jsx';

function Hero() {
  return (
    <div className="container">
      <Avatar photo={protrait} text="PRO" />
    </div>
  );
}

export default Hero;
