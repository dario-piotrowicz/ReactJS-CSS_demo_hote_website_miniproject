import Showcase from '../components/showcase.component.js';
import HomeInfoSection from '../components/home-info-section.component.js';
import FeaturesSection from '../components/features-section.component.js';


const Home = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | Home';
    },[]);

    return React.createElement(
        'main',
        {},
        React.createElement(Showcase),
        React.createElement(HomeInfoSection),
        React.createElement(FeaturesSection)
    );
};

export default Home;