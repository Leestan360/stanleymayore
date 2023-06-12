import * as React from "react";
import { skillsInfo } from "../../portfolio";
import JDEntry from "./jdentry";


const JDListing = () => {
  return (
      <div className="xl:w-[40%] xxs:w-full">
        <p className="text-2xl font-light text-[#1DA1F2] xxs:text-center md:text-start pl-2">{skillsInfo.title}</p>
        <ul className="pb-10 text-xl font-thin ">
          {skillsInfo.jd.map((item, key) => (
            <JDEntry key={key} jd={item} />
          ))}
        </ul>
        </div>
  )
}




export default JDListing

