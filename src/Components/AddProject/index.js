import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import ProjectItem from '../ProjectItem'
import './index.css'

const dummyList = [
    {
        id: 1,
        projectName: 'Nxt Trendz',
        projectDescription: 'Developed an E-commerce platform "Nxt Trendz" using React JS, CSS, Bootstrap, and Routing. Implemented secure authentication and authorization with JWT tokens, REST API calls, and user login credentials (username: rahul, password: rahul@2021). The platform features pages for Login, Products, and Product details, providing a seamless shopping experience.',
        projectLink: 'https://mlnxttrend.ccbp.tech/login'
    },
    {
        id: 2,
        projectName: 'Nxt Watch',
        projectDescription: 'Developed Nxt Watch, a YouTube-inspired platform using React JS, JavaScript, CSS, and Bootstrap. Implemented features such as user authentication, secure navigation with React Router, and a responsive UI. Utilized REST API calls, local storage, and JWT tokens for authentication. Crafted pages for Login, Home, Trending, Gaming, and Saved videos, allowing users to customize the visual theme. Credentials for testing: username - rahul, password - rahul@2021.',
        projectLink: 'https://mlnxtwatch.ccbp.tech/login'
    },
    {
        id: 3,
        projectName: 'Todos Application',
        projectDescription: 'Developed a persistent ToDo application with HTML, CSS, JS, and Bootstrap, showcasing CRUD operations for task management. Utilized HTML list elements, styled with CSS and Bootstrap. Implemented dynamic UI updates using JavaScript event listeners, DOM operations, and stored ToDo list state in local storage for page reloads.',
        projectLink: 'https://mltodo.ccbp.tech/'
    },
    {
        id: 4,
        projectName: 'Wikipedia Search Application\'s',
        projectDescription: 'Developed a custom Wikipedia search application using HTML, CSS, and JS, with responsive design using Flex properties and CSS Box model. Utilized Bootstrap for styling and made asynchronous REST API calls to fetch and display curated search results. Implemented a feature to open detailed Wikipedia explanations in a new tab upon user click.',
        projectLink: 'https://mlwikipedia.ccbp.tech/'
    },
    {
        id: 5,
        projectName: 'Tasty Kitchen',
        projectDescription: 'Developed a responsive Online Food Ordering Platform using HTML, CSS, and React JS, integrating React Router for navigation and React Slick for a carousel feature. Utilized Bootstrap, Figma mockups, and client storage for an intuitive user experience. Login credentials: username - rahul, password - rahul@2021.',
        projectLink: 'https://mlkitchen.ccbp.tech/',
    }
]

class AddProject extends Component{
    state = {
        projectList: [...dummyList],
        projectName: '',
        projectLink: '',
        projectDescription: ''
    }

    onChangeProjectName = event => {
        this.setState({projectName: event.target.value})
    }

    onChangeProjectLink = event => {
        this.setState({projectLink: event.target.value})
    }

    onChangeProjectDescription = event => {
        this.setState({projectDescription: event.target.value})
    }

    onAddProject = event => {
        event.preventDefault()
        const {projectName, projectLink, projectDescription} = this.state
        const newProject = {
            id : uuid(),
            projectName,
            projectLink,
            projectDescription
        }
        this.setState(prveState => ({
            projectList: [...prveState.projectList, newProject],
            projectName: '',
            projectLink: '',
            projectDescription: ''
        }))
    }

    render(){
        const {projectList, projectName, projectDescription, projectLink} = this.state
        console.log(projectList)
        return(
            <>
                <div className='add-project-container'>
                    <h1 className='add-project-heading'>Add Project</h1>
                    <hr />
                    <div className='add-project-inner-container'>
                        <form className='add-project-form-container' onSubmit={this.onAddProject}>
                            <label htmlFor="name">Project Name</label>
                            <input 
                            value={projectName}
                            onChange={this.onChangeProjectName}
                            className='project-input'
                            id="name" 
                            />
                            <label htmlFor="link">Project Link</label>
                            <input 
                            value={projectLink}
                            onChange={this.onChangeProjectLink}
                            className='project-input'
                            id="link" 
                            />
                            <label htmlFor="description">Project Name</label>
                            <textarea
                            value={projectDescription}
                            onChange={this.onChangeProjectDescription}
                            rows="9"
                            id="description" 
                            ></textarea>
                            <button type="submit" className='add-btn'>Add</button>
                        </form>
                    </div>
                </div>
                <div className='projects-container'>
                    <h1 className='add-project-heading'>Projects</h1>
                    <div className='add-inner-container'>
                    <ul className='add-projects-ul-container'>{
                        projectList.map(each => (
                            <ProjectItem key={each.id} projectDetails={each} /> )
                        )
                        }
                    </ul>
                    </div>
                </div>
            </>
            
            
        )
    }
}

export default AddProject