import './index.css'

const MyProfile = () => (
    <div className="my-profile-container">
        <div className="my-profile-header">
            <p>Muthulingam</p>
            <div className="header-contact">
                <p>About</p>
                <p>Projects</p>
                <p>Contacts</p>
            </div>
        </div>
        <p className="role">Frontend Engineer</p>
        <div className="my-profile-content-container">
            <h1 className="my-profile-heading">Hello,  my name is Muthulingam</h1>
            <p className="my-profile-description">As a Full-stack Developer based in Chennai, I bring expertise in HTML, CSS, Python, and JavaScript, with proficiency in React.js, Node.js, Express, and SQLite. Developed projects include an E-commerce platform (Nxt Trendz), a YouTube-inspired app (Nxt Watch), Todos Application, and Wikipedia Search Application. Certified in React JS, Node JS, SQL, Python, and JavaScript Essentials. Connect with me on GitHub and LinkedIn.</p>
            <div>
                <button className="my-profile-projects-btn">Projects</button>
                <button className="my-profile-linkedIn-btn"><a href='https://www.linkedin.com/in/muthulingam1410/'>LinkedIn</a></button>
            </div>
        </div>
    </div>
)

export default MyProfile