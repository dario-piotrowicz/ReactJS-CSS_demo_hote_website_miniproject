import App from './app.js';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(
            ReactRouterDOM.HashRouter,
            { basename: '/' },
            React.createElement(ReactRouterDOM.withRouter(App))
        ),
        document.getElementById('root')
    );
});
