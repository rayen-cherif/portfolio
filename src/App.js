import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <BrowserRouter>
          <Route path='/' component={Home} exact />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
