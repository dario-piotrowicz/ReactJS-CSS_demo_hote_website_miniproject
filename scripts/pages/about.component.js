
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
