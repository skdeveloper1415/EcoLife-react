import './App.css';
import Navigation from './components/Navigation';
import MainHero from './components/MainHero';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <>
      <Navigation />
      <MainHero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
