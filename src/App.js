import './App.scss';
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path= "/"          element= {<Home/>}>     </Route>
          <Route path= "/contact"   element= {<Contact/>}>  </Route>
          <Route path= "/services"  element= {<Services/>}> </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
