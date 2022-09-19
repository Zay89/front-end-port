import React from 'react'
import skillsScreen from './Style/skillsScreen.css'

const SkillsScreen = () => {
  return (
    <div className='skills_container'>
      <h2 className='skills_title'>Mis habilidades</h2>
      <div className='skills_icons'>
        <div className="skills_icon_html">
          <i className="fa-brands fa-html5"></i>
          <p className='skills_icon_html_text'>HTML 5</p>
        </div>
        <div className='skills_icon_css'>
          <i className='bx bxl-css3'></i>
          <p className='skills_icon_css_text'>CSS 3</p>
        </div>
        <div className="skills_icon_js">
          <i class="fa-brands fa-js"></i>
          <p className="skills_icon_js_text">JavaScript</p>
        </div>
        <div className='skills_icon_react'>
          <i className="fa-brands fa-react"></i>
          <p className="skills_icon_react_text">React</p>
        </div>
        <div className="skills_icon_redux">
          <i class='bx bxl-redux'></i>
          <p className="skills_icon_redux_text">Redux</p>
        </div>
        <div className="skills_icon_git">
          <i class="fa-brands fa-git-alt"></i>
          <p className="skills_icon_git_text">Git</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsScreen