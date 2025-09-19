import FeaturedContent from './FeaturedContent.jsx';
import FeaturedContentHeading from './FeaturedContentHeading.jsx';
import img from './FCimages/image.png';
import imgone from './FCimages/image1.jpg';
import imgtwo from './FCimages/image2.jpg';
function FC() {
  return (
    <div className='main-container'>
      <FeaturedContentHeading />

      <div className='cardsContainer'>
        <FeaturedContent
          image={img}
          socialMedia='Youtube'
          views='125k views'
          contentHeading='Design System Mastery'
          content='Complete guide to building scalable design systems'
        />
        <FeaturedContent
          image={imgone}
          socialMedia='Instagram'
          views='89k views'
          contentHeading='Brand identity workshop'
          content='Steps-by-steps branding process for startups'
        />

        <FeaturedContent
          image={imgtwo}
          socialMedia='Tiktok'
          views='287k views'
          contentHeading='UI Animation Techniques'
          content='Creating micro-interactions that delight users'
        />
      </div>
    </div>
  );
}
export default FC;
