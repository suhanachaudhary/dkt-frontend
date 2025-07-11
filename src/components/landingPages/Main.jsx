
import GetStarted from "./GetStarted";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import LoginGateway from "./LoginGateway";
import PlatformFeatures from "./PlatformFeatures";
import WhoItsFor from "./WhoItsFor";
function Main(){
    return(
        <>
            <section id="about" className="scroll-mt-20">
                <HeroSection />
            </section>
            <section id="how-it-works" className="scroll-mt-20">
                <HowItWorks />
            </section>
            <section id="who-its-for" className="scroll-mt-20">
                <WhoItsFor />
            </section>
            <section id="platform-features" className="scroll-mt-20">
                <PlatformFeatures />
            </section>
            <section id="login-gateway" className="scroll-mt-20">
                <LoginGateway />
            </section>

            <section id="contact" className="scroll-mt-20">
                <GetStarted />
            </section>

        </>
    )
}
export default Main;