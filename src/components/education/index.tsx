import React from "react";
import { SchoolType } from "../../types";
import { ThemeContext } from "../../ThemeContext";
import Bullet from "../bullet";

type Props = {
  key: number;
  school: SchoolType;
};

const EducationCard = ({ key, school }: Props) => {
  const { theme } = React.useContext(ThemeContext);
  // const sty = "rounded-xl bg-white p-4 ring ring-blue-50 sm:p-6 lg:p-8"

  // border border-gray-100 hover:shadow-md hover:shadow-white shadow-white shadow-sm rounded-lg 
  return (
    <div
      key={key}
      id="parent"
      className={theme === "dark" ? "lg:w-[49%] xxs:w-[100%] bg-[#1F2938] border border-[#1F2938] hover:shadow-md hover:shadow-[#1F2938]  shadow-[#1F2938] shadow-sm rounded-lg px-6 py-4 cursor-pointer " : "lg:w-[49%] xxs:w-[100%] bg-white border border-gray-300 hover:shadow-md hover:shadow-gray-300  shadow-gray-300 shadow-sm rounded-lg px-6 py-4 cursor-pointer"}
    >
      <span id="child" className="absolute inset-x-0 bottom-0 h-2"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-normal text-[#1DA1F2] sm:text-xl">
            {school.schoolName}
          </h3>

          <p className={theme === "dark" ? "mt-1 text-lg font-medium text-white" : "mt-1 text-lg font-medium text-gray-500"}>
            {school.subHeader}
          </p>
          <p className={theme === "dark" ? "mt-1 text-base font-normal text-white" : "mt-1 text-base font-normal text-gray-500"}>
            {school.duration}
          </p>
        </div>

        {/* <div className="hidden sm:block sm:shrink-0">
          <img
            alt={`${school.schoolName}`}
            src="https://source.unsplash.com/mjRwhvqEC0U/600x600"
            className="border border-solid border-[#1DA1F2] h-24 w-24 rounded-full object-cover shadow-sm"
          />
        </div> */}
      </div>

      <p className={theme === "dark" ? "mt-1 text-base font-thin text-white max-w-[70ch]" : "mt-1 text-base font-thin text-gray-500 max-w-[70ch]"}>
        {school.desc}
      </p>

      <div className="mt-1">
        <p className={theme === "dark" ? "max-w-fit text-base font-thin text-white" : "max-w-fit text-base font-thin text-gray-500"}>
          <Bullet descBullets={school.descBullets} />
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
