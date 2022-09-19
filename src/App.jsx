import { Route, Routes } from 'react-router-dom'
import HeaderScreen from './Components/Shared/HeaderScreen'
import HomeScreen from './Components/Home/HomeScreen'
import SkillsScreen from './Components/Skills/SkillsScreen'
import PortfolioScreen from './Components/Portafolio/PortfolioScreen'
import ContactScreen from './Components/Contact/ContactScreen'
import FooterScreen from './Components/Shared/FooterScreen'



function App() {

  return (
    <div className="App">
      <HeaderScreen />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/skills' element={<SkillsScreen />} />
          <Route path='/portfolio' element={<PortfolioScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App
