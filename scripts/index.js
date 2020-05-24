document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(
            ReactRouterDOM.BrowserRouter,
            {},
            React.createElement(ReactRouterDOM.withRouter(App))
        ),
        document.getElementById('root')
    );
});
