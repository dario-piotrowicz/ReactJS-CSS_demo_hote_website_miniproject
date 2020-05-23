
const App = () => {
    const header = React.createElement(Header);
    return React.createElement('div', null, header);
};

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('root')
    );
});
