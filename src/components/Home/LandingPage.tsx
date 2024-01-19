import Sidebar from "./Sidebar"
import bgvideo from '../../assets/fighter-trailer.mp4'
import Category from "../Category/Category"
import HeroSection from "../HeroSection/HeroSection"

const LandingPage = () => {
  return (
    <main className="landingpage relative hero-bg min-h-screen bg-[#0f1014]">
      <video autoPlay loop muted className="h-fit object-cover absolute -z-10 -mt-24">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="landingpage__section relative pb-8">
        <Sidebar />
        <HeroSection />
        <Category title="Latest Release" />
        <Category title="Best in Sports" />
      </section>
    </main>
  )
}

export default LandingPage