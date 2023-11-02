import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import './App.css';
import About from './components/About';
import Stem from './components/Stem';
import Footer from './components/Footer';
import StemInfo from './components/StemInfo';

function App() {
  return (
    <div>
    <Navbar />
    <Carrusel />
    <About />
    <Stem />
    <StemInfo />
    <Footer />
    </div>
  );
}

export default App;
