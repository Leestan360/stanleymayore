import React from 'react'
import { BigProjectType } from '../../types'
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import {VscArrowRight} from "react-icons/vsc";
import Skills from "../../utils/stackpack";

type Props = {
    key: number
    project: BigProjectType
}

const BigProjectCard = ({key, project}: Props) => {
  const { theme } = React.useContext(ThemeContext);
  // rounded-lg hover:shadow-md hover:shadow-white shadow-white shadow-sm border border-gray-100

  return (
    <div key={key} className= {theme === "dark" ? "lg:w-[32%] xxs:w-[100%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-4 cursor-pointer": "lg:w-[32%] xxs:w-[100%] bg-white border border-gray-300 hover:shadow-md hover:shadow-gray-300  shadow-gray-300 shadow-sm rounded-lg px-6 py-4 cursor-pointer"}>
      <Link to="#">
      <div className="cursor-pointer my-3 flex justify-between">
        <p className="text-lg my-auto text-[#1DA1F2] font-normal">{project.projectname}</p>
          <div className={theme === "dark" ? "text-xl text-[#1DA1F2] my-auto"  : "text-xl text-gray-500 my-auto"}>
            <VscArrowRight/>
          </div>
      </div>
      </Link>
        <p className={theme === "dark" ? "my-3 font-light text-white" : "my-4 font-light text-gray-500"}>{project.description}</p>
        <div className="flex flex-wrap">
          <Skills skills={project.stack}/>
        {/* <Link
            to=""
            className={theme === "dark" ? "border-2 border-[#1DA1F2] text-base font-normal text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] text-base font-normal bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
        >
            Visit Website
        </Link> */}
        </div>
    </div>
  )
}

export default BigProjectCard