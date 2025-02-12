import './App.css'
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import Blogs from './pages/Blogs.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/certificates" element={<Certificates/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
