import React from 'react'
import { achievementsInfo } from '../../portfolio'
import AchievementCard from '../../components/achievement'


const Achievements = () => {
    const achievementSectionStyle = "flex flex-col my-24"
    const achievementHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    // const trial = "flex flex-wrap justify-between"
    const achievementCardContainerStyle = "flex flex-wrap justify-between pt-5 gap-y-7"
  return (achievementsInfo.display) ? (
    <section className={achievementSectionStyle} id="achievements">
        <div className="w-auto">
          <h1 className={achievementHeaderStyle}>{achievementsInfo.title}</h1>
        </div>
        <div className={achievementCardContainerStyle}>
          {achievementsInfo.achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement}/>
          ))}
        </div>
    </section>
  ): null
}

export default Achievements