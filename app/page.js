import HeaderWithVideo from './Components/HeaderWithVideo';
import StatsBar from './Components/StatsBar';
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import GlobalReach from './Components/GlobalReach';
import IndustrySolutions from './Components/IndustrySolutions';
import FeaturedCitizenCargoLogistics from './Components/FeaturedCitizenCargoLogistics';
import Testimonials from './Components/Testimonials';
import BusinessCTA from './Components/BusinessCTA';
import FeaturesReturn from './Components/FeaturesReturn';
import TechnologyTracking from './Components/TechnologyTracking';
import Update from './Components/Update';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <div>
      <HeaderWithVideo />
      <StatsBar />
      <Features />
      <HowItWorks />
      <GlobalReach />
      <IndustrySolutions />
      <FeaturedCitizenCargoLogistics />
      <Testimonials />
      <BusinessCTA />
      <FeaturesReturn />
      <TechnologyTracking />
      <Update />
      <Footer />
    </div>
  );
}
