import * as React from "react";
import { ThemeContext } from "../../ThemeContext";
import { themes } from "../../theme";
import { achievementsInfo, bigProjectsInfo, blogInfo, educationInfo, openSourceProjectsInfo, skillsInfo, workInfo } from "../../portfolio";


interface NavbarProps {
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavbarProps> = ({ onToggleTheme }) => {
  const { theme } = React.useContext(ThemeContext);
  const themeColors = themes[theme];
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const scrollToPage = () => {
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <div
      className="sticky top-0 flex justify-between text-[1.2rem] py-6 bg-[#161D27] md:px-28 xl:px-36 font-aper xxs:px-5 xxs:py-2 xsm:px-8 sm:px-14"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      <a href="/portfolio" className="my-auto">
        <i className="fa-thin fa-less-than"></i> Stanley Mayore /
        <i className="fa-regular fa-slash-forward"></i>
        <i className="fa-thin fa-greater-than"></i>
      </a>
      <div className="hidden xl:flex xl:items-center font-light xl:text-[0.8rem] 2xl:text-base">
        <a
          href="#skills"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
          onClick={scrollToPage}
        >
          {skillsInfo.title}
        </a>
         {(workInfo.display) ? (
        <a
          href="#experience"
          className="px-4 py-2 hover:bg-gray-100  hover:text-[#1DA1F2] "
        >
          {workInfo.title}
        </a>) : null
        }
        { (bigProjectsInfo.display) ? (
        <a
          href="#featured-projects"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          {bigProjectsInfo.title}
        </a>) : null
        }
        { (openSourceProjectsInfo.display) ? (
        <a
          href="#open-source"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          {openSourceProjectsInfo.title}
        </a>): null
        }
        {(educationInfo.display) ?
        (<a
          href="#education"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          {educationInfo.title}
        </a>) : null
        }

        {(achievementsInfo.display)? (
        <a
          href="#achievements"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          {achievementsInfo.title}
        </a>): null
        }
        {(blogInfo.display) ?
        (<a
          href="#musings"
          className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
        >
          {blogInfo.title}
        </a>): null
          }
      </div>
      <i
        className="fa-solid fa-moon cursor-pointer xxs:hidden xl:block my-auto"
        onClick={onToggleTheme}
      ></i>
      <div className="xl:hidden">
        {!showMenu ? (
          <i
            className="fa-solid fa-bars cursor-pointer"
            onClick={handleMenuClick}
          ></i>
        ) : (
          <i
            className="fa-solid fa-xmark cursor-pointer"
            onClick={handleMenuClick}
          ></i>
        )}
      </div>
      {showMenu && (
        <div
          className={
            theme === "dark"
              ? "xl:hidden absolute top-16 xxs:right-5 xsm:right-8 sm:right-14 md:right-32 bg-[#171c28] shadow-lg py-4 rounded-[4px]"
              : "xl:hidden absolute top-16 xxs:right-5 xsm:right-8 sm:right-14 md:right-32 bg-white shadow-lg py-4 rounded-[4px]"
          }
        >
          <div className=" grid">
            <a
              href="#skills"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              SKILLS
            </a>
            <a
              href="#experience"
              className="px-8 py-2 hover:bg-gray-100  hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              EXPERIENCE
            </a>
            <a
              href="#featured-projects"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              FEATURED PROJECTS
            </a>
            <a
              href="#open-source"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              OTHER PROJECTS
            </a>

            <a
              href="#education"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              EDUCATION
            </a>

            <a
              href="#achievements"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              ACHIEVEMENTS
            </a>
            <a
              href="#musings"
              className="px-8 py-2 hover:bg-gray-100 hover:text-[#1DA1F2] "
              onClick={handleMenuClick}
            >
              PUBLICATIONS
            </a>
          </div>
          <i
            className="fa-solid fa-moon cursor-pointer px-8 py-2"
            onClick={onToggleTheme}
          ></i>
        </div>
      )}
    </div>
  );
};

export default NavBar;