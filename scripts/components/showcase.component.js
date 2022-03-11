
import importCss from '../utils/import-css.js';

importCss('../../styles/showcase.css');

const showcaseSubtitle = `
 And enjoy visiting this wonderful website made
 using basic HTML & CSS and also a bit of ReactJs
 (without using CRA, JSX, WebPack, Babel, etc...)
`;

const Showcase = () => React.createElement(
        'div',
        {id: 'showcase'},
        React.createElement(
            'div',
            {className: 'centering-container'},
            React.createElement(
                'div',
                {className: 'showcase-content'},
                React.createElement(
                    'h1',
                    {},
                    React.createElement(
                        'span',
                        {className: 'text-primary'},
                        'Enjoy'
                    ),
                    ' Your Stay'
                ),
                React.createElement(
                    'p',
                    {},
                    showcaseSubtitle
                ),
                React.createElement(
                    ReactRouterDOM.Link,
                    {to: '/about', className: 'btn'},
                    'About Our Hotel'
                )
            )
        )
);

export default Showcase;