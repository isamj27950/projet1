import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import SectionFeatures from './components/SectionFeatures';
import SectionInsideTemplate from './components/SectionInsideTemplate';
import SectionStep from './components/SectionStep';
import SectionComponent from './components/SectionComponent';
import SectionBlog from './components/SectionBlog';
import SectionFaqs from './components/SectionFaqs';
import SectionAstro from './components/SectionAstro';
import Footer from './components/baspage/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <SectionFeatures />
        <SectionInsideTemplate/>
        <SectionStep/>
        <SectionComponent/>
        <SectionBlog/>
        <SectionFaqs/>
        <SectionAstro /> 
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
