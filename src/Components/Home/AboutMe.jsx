import React from 'react'
import aboutMe from './Style/aboutMe.css'
import cvdevzay from '../../../Public/cvdevzay.pdf';

const AboutMe = () => {
    return (
        <div className='home_aboutMe'>
            <p className='home_aboutMe_text'>
                <span className='home_aboutMe_text_title'>
                    Sobre mí
                </span><br/><br/>
                Soy apasionada de la programación, la música, la lectura, los gatos y el tiempo con mi familia.
                Actualmente resido en México, en un pequeño y bello estado en la costa del océano pacífico.
                Soy organizada, atenta a los detalles, me gusta solucionar problemas, trabajadora independiente, interesada en las animaciones, redes neuronales e inteligencia artificial.
                No le temo a los desafíos, tengo una necesidad imperante de continuar aprendiendo, así que bienvenidos los retos y proyectos nuevos
            </p><br />
            <div className='home_aboutMe_cv'>
                <div className='home_aboutMe_cv_button'>
                    <a href={cvdevzay} download className='home_aboutMe_cv_button_link'>Descargar CV</a>       
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe