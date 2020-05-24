
const Home = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | Home';
    },[]);

    const showcase = React.createElement(Showcase);
    const infoSection = React.createElement(HomeInfoSection);
    const featuresSection = React.createElement(FeaturesSection);
    const clearFloats = React.createElement('div',{className: 'clr'});

    return React.createElement(
        'main',
        {},
        showcase,
        infoSection,
        featuresSection,
        clearFloats
    );
};
