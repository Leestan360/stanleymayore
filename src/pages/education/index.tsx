import React from 'react'
import EducationCard from '../../components/education'
import { educationInfo } from '../../portfolio'



const Education = () => {
    const educationSectionStyle = "flex flex-col my-24"
    const educationHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const educationCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-y-7"
  return (
      <section className={educationSectionStyle} id="education">
        <div className="w-auto">
          <h1 className={educationHeaderStyle}>{educationInfo.title}</h1>
        </div>
        
        <div className={educationCardContainerStyle}>
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </section>
    )
}

export default Education