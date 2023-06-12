import * as React from "react";
import { skillsInfo } from "../../portfolio";
import SkillEntry from "./skillentry";


const StackListing = () => {
  return (
        <div className="xl:w-[53%] xxs:w-full">
        <p className="text-2xl font-light text-[#1DA1F2] xxs:text-center md:text-start ">{skillsInfo.subTitle}</p>
        <div className="flex py-3 flex-wrap gap-x-6">
          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Languages</h4>
            {skillsInfo.languageskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Frameworks</h4>
            {skillsInfo.frameworkskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Cloud</h4>
            {skillsInfo.cloud.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Database</h4>
            {skillsInfo.databaseskills.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>

          <div className="">
            <h4 className="text-lg font-bold text-[#1DA1F2]">Others</h4>
            {skillsInfo.others.map((skill, index) => (
              <SkillEntry key={index} skill={skill.skillName} icon={skill.fontAwesomeClassname}/>
            ))}
          </div>
        </div>
        </div>
    )
  }

  export default StackListing