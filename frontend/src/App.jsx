
import Home from './Pages/Home'
import { Routes, Route } from 'react-router'
import Explore from './Pages/Explore'
import Roadmap from './Pages/Roadmap'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Practice from './Pages/Practice'

const App = () => {
  return (
  
    <>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Explore" element={<Explore />} />
    <Route path="/Roadmap" element={<Roadmap />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Practice" element={<Practice />} />
    

    </Routes>
     HELLO

    </>
   
   
  ) 
}
export default App
