import './styles/App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App flex flex-col justify-between ">
        <Header/>
        <Hero />
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
    </div>
  );
}

export default App;
