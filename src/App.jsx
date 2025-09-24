import './App.css'
import Card from './components/what-people-say/Card.jsx'
import Hero from './components/Hero-Section/Hero.jsx'
import FC from './components/FContent/featuredContent1.jsx'
import Contact from './components/Contact-me/contact.jsx'
import CreateTogether from './components/create together/CreateTogether.jsx'

function App() {
  return (
    <>
      <Hero />
      <FC />
      <Contact />
      <Card />
      <CreateTogether />
    </>
  )
}
export default App
