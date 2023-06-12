import React from 'react';
import ExperienceCard from '../../components/experience';
import { workInfo } from '../../portfolio';


const Experience = () => {
    const experienceSectionStyle = "flex flex-col my-24"
    const experienceHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const experienceCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-y-7"
  return (workInfo.display) ? (
    <section className={experienceSectionStyle} id="experience">
        <div className='w-auto'>
            <h1 className={experienceHeaderStyle}>{workInfo.title}</h1>
        </div>
        <div className={experienceCardContainerStyle}>
            {workInfo.experiences.map((experience, index) => (
                <ExperienceCard key={index} work={experience}/>
            ))}
        </div>

    </section>
  ) : null
}

export default Experience