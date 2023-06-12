import React from "react";
import { WorkType } from "../../types";
import Skills from "../../utils/stackpack";
import { ThemeContext } from "../../ThemeContext";
import Bullet from "../bullet";

type Props = {
  key: number;
  work: WorkType;
};

const ExperienceCard = ({ key, work }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  // border border-gray-100 hover:shadow-md hover:shadow-white  shadow-white shadow-sm rounded-lg
  // bg-[#171c28]

  return (
    <div
      key={key}
      id="parent"
      className={theme === "dark" ? "lg:w-[49%] xxs:w-[100%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-4 cursor-pointer  " : "lg:w-[49%] xxs:w-[100%] bg-white border border-gray-300 hover:shadow-md hover:shadow-gray-300  shadow-gray-300 shadow-sm rounded-lg px-6 py-4 cursor-pointer"}
    >
      <span id="child" className="absolute inset-x-0 bottom-0 h-2"></span>
      <div className="sm:flex sm:justify-between sm:gap-4 mb-4 pb-4">
        {/* <div className="hidden sm:block sm:shrink-0">
          <img
            alt={`${work.company}`}
            src="https://source.unsplash.com/mjRwhvqEC0U/600x600"
            className="border border-solid border-[#1DA1F2] h-24 w-24 rounded-full object-cover shadow-sm"
          />
        </div> */}
        <div>
          <div className="lg:flex lg:flex-col lg:justify-between md:flex-col">
          <div>
          <span className="text-lg font-normal text-[#1DA1F2] sm:text-xl">
            {work.role}
          </span>
          <span
            className={
              theme === "dark"
                ? "text-lg font-bold text-white"
                : "text-lg font-bold text-gray-500"
            }
          >
            @
          </span>
          <span
            className={
              theme === "dark"
                ? "text-lg font-medium text-white"
                : "text-lg font-medium text-gray-500"
            }
          >
            {work.company}
          </span>
          </div>
          <div>
            <p
            className={
              theme === "dark"
                ? "mt-1 text-base font-normal text-white"
                : "mt-1 text-base font-normal text-gray-500"
            }
          >
            {work.date}
          </p>
          </div>
          </div>

          <p
            className={
              theme === "dark"
                ? "mt-1 text-base font-thin text-white"
                : "mt-1 text-base font-thin text-gray-500"
            }
          >
            {work.desc}
          </p>
        </div>
      </div>
      <div>
        <div className="mt-1">
          <p
            className={
              theme === "dark"
                ? "max-w-fit text-base text-white font-thin"
                : "max-w-fit text-base text-gray-500 font-thin"
            }
          >
            <Bullet descBullets={work.descBullets} />
          </p>
        </div>
      </div>
      <div className="pt-5 ">
        <div className="mt-1 text-sm font-thin flex flex-wrap">
          <Skills skills={work.stack}></Skills>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
