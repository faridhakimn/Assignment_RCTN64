import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div className="App-Header">
            <h1>ABOUT</h1>
            <p>Hi, I'm Farid on React JS Training  @HACKTIV8 </p>
            <Link className="link" to={'experience'}>EXPERIENCES</Link> {' | '}
            <Link className="link" to={'education'}>EDUCATION</Link> {' | '}
            <Link className="link" to={'skills'}>SKILLS</Link> {' | '}
            <Link className="link" to={'interest'}>INTEREST</Link> {' | '}
            <Link className="link" to={'awards'}>AWARDS</Link> {' | '}
            <Outlet/>
        </div>
    )
}

export default About