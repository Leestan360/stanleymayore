import * as React from "react";
import { Link } from "react-router-dom";
import {AchievementType} from "../../types"
import { ThemeContext } from "../../ThemeContext";
import {VscArrowRight} from "react-icons/vsc";

type Props = {
  key: number
  achievement: AchievementType
}

const AchievementCard = ({key, achievement}: Props) => {
  const { theme } = React.useContext(ThemeContext);
  //  hover:shadow-md hover:shadow-white shadow-white shadow-sm rounded-lg border border-gray-100 

  return (
      <div key={key} className={theme === "dark" ? "lg:w-[32%] xxs:w-[100%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-4 cursor-pointer" : "lg:w-[32%] xxs:w-[100%] bg-white border border-gray-300 hover:shadow-md hover:shadow-gray-300  shadow-gray-300 shadow-sm rounded-lg px-6 py-4 cursor-pointer"}>
        <Link to="#">
      <div className="cursor-pointer my-3 flex justify-between">
        <p className="text-lg my-auto text-[#1DA1F2] font-normal">{achievement.title}</p>
          <div className={theme === "dark" ? "text-xl text-[#1DA1F2] my-auto"  : "text-xl text-[#1DA1F2] my-auto"}>
            <VscArrowRight/>
          </div>
      </div>
      </Link>
          
          {/* <img src="/united-kingdom.png" alt="achievement1" className="w-12 mx-auto" /> */}
          {/* <p className="font-normal text-lg my-2 text-[#1DA1F2]">
            {achievement.title}
          </p> */}
          <p className={theme === "dark" ? "my-4 text-white font-thin" : "my-4 text-gray-500 font-thin"}>
            {achievement.subtitle}
          </p>
          {/* <div className="flex justify-center gap-2 flex-wrap">
            <Link
              to=""
              className={theme === "dark" ? "border-2 border-[#1DA1F2] text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
            >
              Certification
            </Link>
            <Link
              to=""
              className={theme === "dark" ? "border-2 border-[#1DA1F2] text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] " : "border-2 border-[#1DA1F2] bg-white text-[#1DA1F2] font-normal hover:bg-[#1DA1F2] hover:text-white ease-in duration-300 px-3 py-1 rounded-md text-[0.8rem] "}
            >
              Award Letter
            </Link>
          </div> */}
        </div>
  )
}


export default AchievementCard;
