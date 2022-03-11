import AboutInfoSection from "../components/about-info-section.component.js";
import AboutTestimonialsSection from "../components/about-testimonials-section.component.js";

const About = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | About';
    },[]);

    return React.createElement(
        'main',
        {},
        React.createElement(AboutInfoSection),
        React.createElement(AboutTestimonialsSection)
    );
}

export default About;