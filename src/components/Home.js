
import Hero from './Hero';
import StatsStrip from './StatsStrip';  
import CoursesSection from './CoursesSection';
import PlacementSection from './PlacementSection';
import Testimonials from './Testimonials';


function Home() {
    return(
        <>
      <main>
        <Hero />
        <div className="container mt-4">
        <StatsStrip />
        </div>
        <Testimonials />
        <CoursesSection />
        <PlacementSection />
      </main>
      </>
    );
}

export default Home;