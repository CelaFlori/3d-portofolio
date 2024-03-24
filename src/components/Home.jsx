import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Tech from "./Tech.jsx";
import Works from "./Works.jsx";
import Feedbacks from "./Feedbacks.jsx";
import Contact from "./Contact.jsx";
import StarsCanvas from "./canvas/Stars.jsx";
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
      if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname);
      }
        // Scroll to the top of the page on initial load
        window.scrollTo(0, 0);
    }, []);

    return <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/*<Feedbacks/>*/}
        <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
        </div>
    </div>
}

export default Home
