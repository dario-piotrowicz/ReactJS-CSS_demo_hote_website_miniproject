import Header from './components/header.component.js';
import Footer from './components/footer.component.js';
import Home from './pages/home.component.js';
import About from './pages/about.component.js';
import Contact from './pages/contact.component.js';
import PageNotFound from './pages/page-not-found.component.js';

import importCss from './utils/import-css.js';

importCss('../../styles/common.css');

const App = ({ history }) => {

    React.useEffect(() => {
        const unlisten = history.listen( () => {
          window.scrollTo(0, 0);
        });
        return () => unlisten();
    }, [history]);

    return React.createElement(
        'div',
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
                ),
                React.createElement(
                    ReactRouterDOM.Route,
                    {path: '*'},
                    React.createElement(PageNotFound)
                )
            )
        ),
        React.createElement(Footer)
    );
};

export default App;