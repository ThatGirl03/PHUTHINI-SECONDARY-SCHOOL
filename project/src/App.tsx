import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Gallery from './components/Gallery';
import Sports from './components/Sports';
import Events from './components/Events';
import Team from './components/team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';


function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <Subjects />
      <Gallery />
      <Sports />
      <Events />
      <Terms/>
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;