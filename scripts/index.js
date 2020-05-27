const basename = '/ReactJS-CSS_demo_hotel_miniproject';
//Set basename to '/' for local development

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(
            ReactRouterDOM.BrowserRouter,
            { basename },
            React.createElement(ReactRouterDOM.withRouter(App))
        ),
        document.getElementById('root')
    );
});
