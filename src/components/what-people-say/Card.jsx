import ProfileCard, { heading } from './ProfileCard.jsx'

import './card.css'

const Card = () => {
  return (
    <div>
      {heading}
      <div className="profile">
        <ProfileCard
           image="/bro1.jpg"
          name="Vincent"
          description="Vincent's design tutorials transformed our team's approach to visual content. His clear explanations and practical tips are invaluable."
          job="Marketing Designer"
          Title="Tech Marketer"
        />

        <ProfileCard
          image="/bro2.jpg"
          name="Michael"
          description="Following Vincent across platforms has elevated my design skills tremendously. His consistency is high-quality and inspiring."
          job="Graphics Designer"
          Title="Tech Graphics"
        />

        <ProfileCard
          image="/bro4.jpg"
          name="Enoch"
          description="Vincent's social media presence is authentic and educational. His behind-the-scenes content gives real insight into the creative process."
          job="Fashion Designer"
          Title="Tech Fashion"
        />
      </div>
    </div>
  )
}

export default Card
