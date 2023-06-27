import { useState } from 'react'
import {Header} from './Components/Header.jsx'
import { LanguageProvider } from './Components/LanguageContext.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './resources/Localization/i18n.js'
import { Nav } from './Components/Nav.jsx'
import { Main } from './Components/Main.jsx'
import { Footer } from './Components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<I18nextProvider i18n={i18n}>
 <LanguageProvider>
  <Header/>
  <Nav/>
  <Main/>
  <Footer/>
 </LanguageProvider>
 </I18nextProvider>
</>
  )
}

export default App
