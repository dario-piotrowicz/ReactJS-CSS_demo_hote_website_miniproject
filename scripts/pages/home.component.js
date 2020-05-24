
const Home = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | Home';
    },[]);

    return React.createElement(
        'main',
        {},
        React.createElement(Showcase),
        React.createElement(HomeInfoSection),
        React.createElement(FeaturesSection),
        React.createElement('div',{className: 'clr'})
    );
};
