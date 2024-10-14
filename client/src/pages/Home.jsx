
import About from "@/components/About.jsx"
import HeroSection from "../components/HeroSection.jsx"
import Qualities from "@/components/Qualities.jsx"
import Menu from "@/components/Menu.jsx"
import WhereWeAre from "@/components/WheWeAre.jsx"
import Team from "@/components/Team.jsx"
import ReservationForm from "@/components/reservation.jsx"
import Footer from "../components/Footer.jsx"
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhereWeAre/>
        <Team/>
        <ReservationForm/>
        <Footer/>
    </div>
  )
}

export default Home