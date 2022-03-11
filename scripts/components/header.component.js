import importCss from '../utils/import-css.js';

importCss('../../styles/header.css');


import MenuToggle from './menu-toggle.component.js';

const Header = ({ history }) => {
    const pathname = history.location.pathname;
    const isPageHome = pathname === '/' || pathname === '/index.html';
    const isPageAbout = pathname === '/about';
    const isPageContact = pathname === '/contact';
    const getLinkClassName = isPageActive => isPageActive ? 'active' : null;

    return React.createElement(
        'header',
        {},
        React.createElement(
            'nav',
            {id: 'header-navbar'},
            React.createElement(
                'div',
                {className: 'centering-container'},
                React.createElement(
                    'h1',
                    {className: 'logo'},
                    React.createElement(
                        ReactRouterDOM.Link,
                        {to: '/'},
                        'HDP'
                    )
                ),
                React.createElement(
                    'ul',
                    {
                        className: 'nav-menu'
                    },
                    React.createElement(
                        'li',
                        {},
                        React.createElement(
                            ReactRouterDOM.Link,
                            {to: '/', className: getLinkClassName(isPageHome)},
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        {},
                        React.createElement(
                            ReactRouterDOM.Link,
                            {to: '/about', className: getLinkClassName(isPageAbout)},
                            'About'
                        )
                    ),
                    React.createElement(
                        'li',
                        {},
                        React.createElement(
                            ReactRouterDOM.Link,
                            {to: '/contact', className: getLinkClassName(isPageContact) },
                            'Contact'
                        )
                    )
                ),
                React.createElement(
                    MenuToggle,
                    { id: 'menu-toggle'}
                )
            )
        )
    );
};

export default Header;