import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
  faTiktok,
  faDribbble
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className='footer-logo'>logo</div>
      <p className='footer-tagline'>Creative Designer & Content Creator</p>

      <div className='footer-social'>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href='#' target='_blank'>
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </div>

      <div className='footer-bottom'>
        <div className='footer-links'>
          <span>© 2024 Sarah Johnson. All rights reserved.</span>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Service</a>
          <a href='#' target='_blank'>
            Made with Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
