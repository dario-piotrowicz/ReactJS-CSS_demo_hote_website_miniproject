
const Header = () => {
    const logo = React.createElement(
        'h1',
        {className: 'logo'},
        React.createElement(ReactRouterDOM.Link, {to: '/'}, 'HDP'),
    );

    const home = React.createElement(
        'li',
        {},
        React.createElement(ReactRouterDOM.Link, {to: '/'}, 'Home')
    );
    const about = React.createElement(
        'li',
        {},
        React.createElement(ReactRouterDOM.Link, {to: '/about'}, 'About')
    );
    const contact = React.createElement(
        'li',
        {},
        React.createElement(ReactRouterDOM.Link, {to: '/contact'}, 'Contact')
    );
    const ul = React.createElement('ul', {}, home, about, contact);

    const container = React.createElement('div',{className: 'centering-container'}, logo, ul);
    const nav = React.createElement('nav',{id: 'header-navbar'}, container);

    return React.createElement('header', null, nav);
};
