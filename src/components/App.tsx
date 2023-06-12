import * as React from "react";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Footer from "../pages/footer";
import Blog from "../pages/blog";
import { ThemeContext } from "../ThemeContext";
import { themes } from "../theme";
import NavBar from "./navbar";
import BigProject from "../pages/bigprojects";
import OpenSourceProject from "../pages/opensourceprojects";
import Achievements from "../pages/achievements";
import Skills from "../pages/skills";
import Home from "../pages/home";
import HelmetTitle from "../HelmetTitle";
import { homeInfo } from "../portfolio";

function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const themeColors = themes[theme];
  const title = homeInfo.prefTitle;

  // const [toggle, setToggle] = React.useState(false)
  // bg-[#171c28]

  return (
    <div>
      <NavBar onToggleTheme={toggleTheme}  />
      <div
        className="md:px-28 xl:px-36 font-aper py-3 xxs:px-5 xxs:py-2 xsm:px-8 sm:px-14"
        style={{
          backgroundColor: themeColors.background,
          color: themeColors.text,
        }}
      >
        <HelmetTitle title={title} />
        
        <Home/>
        <Skills />
        <Experience/>
        <BigProject/>
        <OpenSourceProject/>
        <Education />
        <Achievements/>
        <Blog/>
        <Footer />
      </div></div>
  );
}

export default App;
