
import './App.css';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import FacilitiesSection from './components/FacilitiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <HeroSection />
        <ActivitiesSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
