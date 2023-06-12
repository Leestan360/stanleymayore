import React from 'react'
import { achievementsInfo, bigProjectsInfo, blogInfo, educationInfo, headLine, openSourceProjectsInfo, skillsInfo, socialMediaInfo, workInfo } from '../../portfolio'
import {SiLinkedin, SiGithub, SiTwitter, SiMinutemailer} from "react-icons/si"



const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="mt-16">
  <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8 border-t-3 border-gray-100">

    <h1 className="mx-auto mt-12 text-center leading-relaxed text-[#1DA1F2] text-2xl font-light">
      {headLine.text}
    </h1>

    <nav aria-label="Footer Nav" className="mt-10">
      <ul className="flex flex-wrap justify-center font-light">
        {(skillsInfo.display) ?
        (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#skills">
            {skillsInfo.title}
          </a>
        </li>): null
        }

        {(workInfo.display) ?
        (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#experience">
            {workInfo.title}
          </a>
        </li>): null}
        { (bigProjectsInfo.display) ?
        (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#featured-projects">
            {bigProjectsInfo.title}
          </a>
        </li>) : null}

        {(openSourceProjectsInfo.display) ? 
        (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#open-source">
            {openSourceProjectsInfo.title}
          </a>
        </li>): null}

        {(educationInfo.display) ? (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#education">
            {educationInfo.title}
          </a>
        </li>): null}

        {(achievementsInfo.display) ? (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#achievements">
            {achievementsInfo.title}
          </a>
        </li>):null}

        {(blogInfo.display) ? (<li>
          <a className="px-4 py-2 hover:bg-gray-100 hover:text-[#1DA1F2]" href="#musings">
            {blogInfo.title}
          </a>
        </li>) : null}

      </ul>
    </nav>

    <ul className="m-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href={`${socialMediaInfo.linkedin}`}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#0072b1]"
        >
          <span className="sr-only">LinkedIn</span>
          <span className="text-3xl">
            <SiLinkedin/>
          </span>
        </a>
      </li>

      <li>
        <a
          href={`${socialMediaInfo.github}`}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-200/75"
        >
          <span className="sr-only">GitHub</span>
          <span className="text-3xl">
            <SiGithub/>
          </span>
        </a>
      </li>

      <li>
        <a
          href={`${socialMediaInfo.twitter}`}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#1DA1F2]"
        >
          <span className="sr-only">Twitter</span>
          <span className="text-3xl">
            <SiTwitter/>
          </span>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${socialMediaInfo.gmail}`}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#1DA1F2]"
        >
          <span className="sr-only">Email</span>
          <span className="text-3xl">
          <SiMinutemailer/>
          </span>
          {/* <i className="text-4xl fa-sharp fa-solid fa-at"/> */}
        </a>
      </li>
    </ul>
    <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
      Theme by <span>
        <a href="https://github.com/Leestan360" rel="noreferrer" target='_blank'>lee</a>
        </span> and <span>
        <a href="https://github.com/realonbebeto" rel="noreferrer" target='_blank'>realonbebeto</a>
        </span>
    </p>
  </div>
</footer>
  )
}

export default Footer