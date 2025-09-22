import FeaturedContentHeading from './featuredContentHeading.jsx'
import FeaturedContent from './featuredContent.jsx'
import img from './FCimages/image.jpg'
import imgone from './FCimages/image0.jpg'
import imgtwo from './FCimages/image1.jpg'

const featuredItems = [
  {
    image: img,
    socialMedia: 'Youtube',
    views: '125k views',
    contentHeading: 'Design System Mastery',
    content: 'Complete guide to building scalable design systems'
  },
  {
    image: imgone,
    socialMedia: 'Instagram',
    views: '89k views',
    contentHeading: 'Brand identity workshop',
    content: 'Steps-by-steps branding process for startups'
  },
  {
    image: imgtwo,
    socialMedia: 'Tiktok',
    views: '287k views',
    contentHeading: 'UI Animation Techniques',
    content: 'Creating micro-interactions that delight users'
  }
]

function FC() {
  return (
    <div className="main-container">
      <FeaturedContentHeading />

      <div className="cardsContainer">
        {featuredItems.map((item, index) => (
          <FeaturedContent
            key={index}
            image={item.image}
            socialMedia={item.socialMedia}
            views={item.views}
            contentHeading={item.contentHeading}
            content={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default FC
