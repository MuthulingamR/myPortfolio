import './index.css'

const ProjectItem = props => {
    const {projectDetails} = props 
    const {projectName, projectLink, projectDescription} = projectDetails
    return(
        <li className='project-item'>
            <h1 className='project-name'>
                {projectName}
            </h1>
            <p className='project-description'>{projectDescription}</p>
            <button className='view-btn'><a href={`${projectLink}`}>View Project</a></button>
        </li>
    )
}

export default ProjectItem