const showcaseSubtitle = `
 And enjoy visiting this wonderful website made
 using basic HTML & CSS and also a bit of ReactJs
 (without using CRA, JSX, WebPack, Babel, etc...)
`;

const Showcase = () => {

    const title = React.createElement('h1',{},
        React.createElement('span',{className: 'text-primary'}, 'Enjoy'),
        ' Your Stay'
    );
    const subtitle = React.createElement('p',{},showcaseSubtitle);
    const about = React.createElement(
        'a',
        {href: 'index.html', className: 'btn'},
        'About Our Hotel'
    );

    const content = React.createElement('div',{className: 'showcase-content'}, title, subtitle, about);

    const container = React.createElement('div',{className: 'centering-container'}, content);
    return React.createElement('div', {id: 'showcase'}, container);
};
