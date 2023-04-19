import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import SectionFeatures from './components/SectionFeatures';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <SectionFeatures />
      </main>
      
    </div>
  );
}

export default App;
