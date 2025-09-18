import React from "react";


import ProfileCard, { heading } from "./ProfileCard";


import bro4 from "../images/bro4.jpg"
import bro1 from "../images/bro1.jpg"
import bro2 from "../images/bro2.jpg"

const Card = () => {



    
        return(
            
             <div>
                     {heading} 
            <div className="profile">
                <ProfileCard
                image={bro4}
                name="Vincent"
                description="'Vincent's design tutorials transformed our team's approach to visual content. His clear explanation and pratical tips are invaluable.'"
                job="Marketing designers"
                Title="tech marketer"
                />

                <ProfileCard
                image={bro1}
                name="Michael"
                description="'Following Vincent accross platforms has elevated my design skills tremendiously.His consistency high-quality and inspiring'."
                job="Graphics designers" 
                Title="tech graphics"
                />

                <ProfileCard
                image={bro2}
                name="Enoch"
                description="'Vincent's social media presence is authentic and educational. His behind the scenes content gives real insight into creativie process'"
                job="Fashion designer"
                Title="tech fashion"
                />
            </div>
            
            </div>
        )
   

}













export default Card