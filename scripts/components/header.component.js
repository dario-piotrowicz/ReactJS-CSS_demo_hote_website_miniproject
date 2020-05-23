
const Header = () => {
    const logo = React.createElement(
        'h1',
        {className: 'logo'},
        React.createElement('a', {href: 'index.html'}, 'HDP')
    );

    const home = React.createElement(
        'li',
        {className: 'logo'},
        React.createElement('a', {href: 'index.html',className: 'current'}, 'Home')
    );
    const about = React.createElement(
        'li',
        {className: 'logo'},
        React.createElement('a', {href: 'index.html'}, 'About')
    );
    const contact = React.createElement(
        'li',
        {className: 'logo'},
        React.createElement('a', {href: 'index.html'}, 'Contact ')
    );
    const ul = React.createElement('ul', {}, home, about, contact);

    const container = React.createElement('div',{className: 'centering-container'}, logo, ul);
    const nav = React.createElement('nav',{id: 'header-navbar'}, container);

    return React.createElement('header', null, nav);
};
