
const Home = () => {
    const showcase = React.createElement(Showcase);
    const infoSection = React.createElement(InfoSection);
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