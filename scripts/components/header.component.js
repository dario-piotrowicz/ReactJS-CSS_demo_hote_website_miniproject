
const Header = ({ history }) => {

    const pagePathname = history.location.pathname;
    const isPageHome = pagePathname === '/' || pagePathname === '/index.html';
    const isPageAbout = pagePathname === '/about';
    const isPageContact = pagePathname === '/contact';

    const getLinkClassName = isPageActive => isPageActive ? 'active' : null;

    const logo = React.createElement(
        'h1',
        {className: 'logo'},
        React.createElement(ReactRouterDOM.Link, {to: '/'}, 'HDP'),
    );

    const home = React.createElement(
        'li',
        {},
        React.createElement(
            ReactRouterDOM.Link,
            { to: '/', className: getLinkClassName(isPageHome) },
            'Home'
        )
    );
    const about = React.createElement(
        'li',
        {},
        React.createElement(
            ReactRouterDOM.Link,
            { to: '/about', className: getLinkClassName(isPageAbout) },
            'About'
        )
    );
    const contact = React.createElement(
        'li',
        {},
        React.createElement(
            ReactRouterDOM.Link,
            {to: '/contact', className: getLinkClassName(isPageContact) },
            'Contact'
        )
    );
    const ul = React.createElement('ul', {}, home, about, contact);

    const container = React.createElement('div',{className: 'centering-container'}, logo, ul);
    const nav = React.createElement('nav',{id: 'header-navbar'}, container);

    return React.createElement('header', null, nav);
};
