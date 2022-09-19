import React from 'react'
import ContactScreen from '../Contact/ContactScreen'
import PortfolioScreen from '../Portafolio/PortfolioScreen'
import SkillsScreen from '../Skills/SkillsScreen'
import AboutMe from './AboutMe'
import homeScreen from './Style/homeScreen.css'



const HomeScreen = () => {
  return (
    <article className='home_main'>
      <div className='home'>
        <div className='home_container'>
          <h1 className='home_container_title'>
            Soy <br /> <span className='home_container_name'>Zayra</span>
            <hr className='home_container_line' />
          </h1>

        </div>
        <div className='home_dev'>
          <p className='home_dev_title'>
            Front-end <br />
            <span className='home_dev_dev'>
              Developer
            </span>
          </p>
          <div className='home_dev_icons'>
            <div className='home_dev_icons_linkedin'>
              <a href='https://www.linkedin.com/in/zayrapizana' target='_blank'>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className='home_dev_icons_github'>
              <a href='https://github.com/Zay89?tab=repositories' target='_blank'>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <SkillsScreen />
      <PortfolioScreen />
      <ContactScreen />
    </article>

  )
}

export default HomeScreen