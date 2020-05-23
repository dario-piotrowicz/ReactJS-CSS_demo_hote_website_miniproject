const App = () => {
    const header = React.createElement(Header);
    const showcase = React.createElement(Showcase);
    const infoSection = React.createElement(InfoSection);
    return React.createElement('div', null, header, showcase, infoSection);
};
