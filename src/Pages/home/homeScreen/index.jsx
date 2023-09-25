import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from '../MyPortfolio'
import Footer from "../Footer";

export default function Home() {
    return(
        <>
            <HeroSection />
            <AboutMe />
            <MyPortfolio />
            <MySkills />
            <Footer />
        </>
    )
}