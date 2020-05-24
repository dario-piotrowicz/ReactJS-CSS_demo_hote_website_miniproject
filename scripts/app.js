const App = () => React.createElement(
        'div',
        {},
        React.createElement(
            ReactRouterDOM.BrowserRouter,
            {},
            React.createElement(
                'div',
                {},
                React.createElement(ReactRouterDOM.withRouter(Header)),
                React.createElement(
                    ReactRouterDOM.Switch,
                    {},
                    React.createElement(
                        ReactRouterDOM.Route,
                        {exact: true, path: ['/index.html','/']},
                        React.createElement(Home)
                    ),
                    React.createElement(
                        ReactRouterDOM.Route,
                        {exact: true, path:'/about'},
                        React.createElement(About)
                    ),
                    React.createElement(
                        ReactRouterDOM.Route,
                        {exact: true, path: '/contact'},
                        React.createElement(Contact)
                    )
                )
            )
        ),
        React.createElement(Footer)
);
