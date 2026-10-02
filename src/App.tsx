import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import HowWeWork from '@/components/HowWeWork';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <HowWeWork />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
