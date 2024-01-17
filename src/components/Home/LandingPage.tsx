import MainSection from "./MainSection"
import Sidebar from "./Sidebar"

const LandingPage = () => {
  return (
    <>
      <section className="home-bg pl-28">
        <Sidebar />
        <MainSection />
      </section>
    </>
  )
}

export default LandingPage