import React from 'react'
import { Link } from 'react-router-dom'

import Main from './Main'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'

class Website extends React.Component{
  constructor(){
    super()

    this.state = {
      isHomepage: true,
      isAboutPage: false,
      isResume: false,
      isProjectsPage: false
    }
  }

  renderHome = () => {
    this.setState({
      isHomepage: true,
      isAboutPage: false,
      isResume: false,
      isProjectsPage: false
    })
  }

  renderAbout = () => {
    this.setState({
      isHomepage: false,
      isAboutPage: true,
      isResume: false,
      isProjectsPage: false
    })
  }

  renderResume = () => {
    this.setState({
      isHomepage: false,
      isAboutPage: false,
      isResume: true,
      isProjectsPage: false
    })
  }

  renderProjects = () => {
    this.setState({
      isHomepage: false,
      isAboutPage: false,
      isResume: false,
      isProjectsPage: true
    })
  }

  render(){
    const { isHomepage, isAboutPage, isResume, isProjectsPage } = this.state
    return(
      <div>
        <nav>
          <Link to='/' onClick={this.renderHome}>Main</Link>
          {" "}
          <Link to='/' onClick={this.renderAbout}>About Me</Link>
          {" "}
          <Link to='/' onClick={this.renderResume}>Resume</Link>
          {" "}
          <Link to='/' onClick={this.renderProjects}>My Projects</Link>
          {" "}
        </nav>
        {isHomepage ?  <Main /> : isAboutPage ? <About /> : isResume ? <Resume /> : isProjectsPage ? <Projects /> : ''}
      </div>
    )
  }
}

export default Website
