
const About = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | About';
    },[]);

    const h1 = React.createElement(
        'h1',
        {},
        'ABOUT PAGE!'
    );

    return React.createElement(
        'main',
        {},
        h1
    );
}
