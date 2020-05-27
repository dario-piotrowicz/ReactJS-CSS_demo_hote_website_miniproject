document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(
            ReactRouterDOM.BrowserRouter,
            { basename: '/ReactJS-CSS_demo_hotel_miniproject' },
            React.createElement(ReactRouterDOM.withRouter(App))
        ),
        document.getElementById('root')
    );
});
