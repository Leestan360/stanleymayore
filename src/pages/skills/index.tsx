import React from 'react'
import JDListing from '../../components/skills/jdlisting'
import StackListing from '../../components/skills/stacklisting'
import { skillsInfo } from '../../portfolio'

const Skills = () => {
  return (skillsInfo.display) ? (
    <section id="skills" className="xl:flex xl:justify-between py-10 xxs:block xxs:py-5">
        <JDListing/>
        <StackListing/>
    </section>
  ) : null
}

export default Skills