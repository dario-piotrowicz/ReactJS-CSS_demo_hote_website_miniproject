const App = () => {
    const header = React.createElement(Header);
    const showcase = React.createElement(Showcase);
    const infoSection = React.createElement(InfoSection);
    const featuresSection = React.createElement(FeaturesSection);
    const clearFloats = React.createElement('div',{className: 'clr'});
    const footer = React.createElement(Footer);
    return React.createElement(
        'div',
        {},
        header,
        showcase,
        infoSection,
        featuresSection,
        clearFloats,
        footer
    );
};
