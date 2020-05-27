document.addEventListener("DOMContentLoaded", () => {
    console.log({ basename:process.env.PUBLIC_URL });
    ReactDOM.render(
        React.createElement(
            ReactRouterDOM.BrowserRouter,
            { basename: process.env.PUBLIC_URL },
            React.createElement(ReactRouterDOM.withRouter(App))
        ),
        document.getElementById('root')
    );
});
