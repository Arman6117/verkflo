import Container from '@/components/container'
import React from 'react'
import ProjectProgress from '../_components/project-progress'
import ProjectDetails from '../_components/project-details'

interface ProjectPageProps {
  params:{
    projectId:string

  }
}
const ProjectPage = ({params}:ProjectPageProps) => {
  return (
    <div className='px-5 py-3 w-screen'>
      <div className='flex gap-7'>
        <Container className='flex-col justify-center items-center gap-2 w-48 '>
          <ProjectProgress/>
        </Container>
        <Container className='w-full '>
           <ProjectDetails id={params.projectId}/>
        </Container>
      </div>
    </div>
  )
}

export default ProjectPage;