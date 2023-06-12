import React, { lazy, useEffect, useState } from 'react'
import { openSourceProjectsInfo } from '../../portfolio'
import { ProjectType } from '../../types'
const OpenSourceProjectCard = lazy(() => import('../../components/opensourceproject'))

const OpenSourceProject = () => {
  const openSourceProjectSectionStyle = 'flex flex-col my-24'
  const openSourceProjectHeaderStyle = 'text-2xl font-light text-[#1DA1F2]'
  const openSourceProjectCardContainerStyle = 'flex flex-wrap justify-between pt-5 gap-y-9 '
  const [repo, setRepo] = useState<ProjectType[]>([])

  useEffect(() => {
    const getRepoData = () => {
      fetch('/stanleymayore/profile.json')
        .then((result) => {
          if (result.ok) {
          return result.json()
          }
          throw Error('Error fetching profile data')
        })
        .then((response) => {
          setRepo(response.user.pinnedItems.edges)
        })
        .catch((error) => {
          console.error(
            `${error.message} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          )
          setRepo([{ node: { name: 'Error' } }])
          openSourceProjectsInfo.display = false
        })
    }
    getRepoData()
  }, [])

  if (!(typeof repo === 'string' || repo instanceof String) && openSourceProjectsInfo.display) {
    return (
      <section className={openSourceProjectSectionStyle} id='open-source'>
        <div className='w-auto'>
          <h1 className={openSourceProjectHeaderStyle}>OTHER PROJECTS</h1>
        </div>
        <div className={openSourceProjectCardContainerStyle}>
          {repo.map((project, index) => (
            <OpenSourceProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default OpenSourceProject
