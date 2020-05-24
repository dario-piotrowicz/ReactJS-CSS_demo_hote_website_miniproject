const App = () => {

    const routerSwitch = React.createElement(
        ReactRouterDOM.Switch,
        {},
        React.createElement(
            ReactRouterDOM.Route,
            { exact: true, path: ['/index.html','/'] },
            React.createElement(Home)
        ),
        React.createElement(
            ReactRouterDOM.Route,
            { exact: true, path:'/about'},
            React.createElement(About)
        ),
        React.createElement(
            ReactRouterDOM.Route,
            { exact: true, path:'/contact'},
            React.createElement(Contact)
        )
    );

    const router = React.createElement(
        ReactRouterDOM.BrowserRouter,
        {},
        React.createElement(
            'div',
            {},
            React.createElement(ReactRouterDOM.withRouter(Header)),
            routerSwitch
        )
    );

    return React.createElement(
        'div',
        {},
        router,
        React.createElement(Footer)
    );
};
