import './App.css'
import {Home} from './Pages/Home/Home.jsx';
import {Experiences} from './Pages/Experiences/Experiences.jsx'
import {Skills} from './Pages/Skills/Skills.jsx';
import {Contacts} from './Pages/Contacts/Contacts.jsx';
import {Routes,Route} from 'react-router';
import {Projects} from './Pages/Projects/Projects.jsx'
import {Abouts} from './Pages/About/About.jsx';
function App() {
  return(
    <Routes>
        <Route index element={<Home />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="experiences" element={<Experiences />}/>
        <Route path="contacts" element={<Contacts />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="about" element={<Abouts />}/>
    </Routes>
  )
}
export default App
