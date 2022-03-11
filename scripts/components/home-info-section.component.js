
import importCss from '../utils/import-css.js';

importCss('../../styles/home-info-section.css');

const homeInfoDescriptionText = `
    The Hotel does not actually exist, and DP stands
    for Dario Piotrowicz which is me the developer
    who is making this miniproject website.
`;

const HomeInfoSection = () => React.createElement(
        'section',
        {id: "home-info-section", className: "background-dark"},
        React.createElement(
            'div',
            {className: 'info-img'}
        ),
        React.createElement(
            'div',
            {className: 'info-content'},
            React.createElement(
                'h2',
                {},
                React.createElement(
                    'span',
                    {className: 'text-primary'},
                    'The History'
                ),
                ' Of Our Hotel'
            ),
            React.createElement(
                'p',
                {},
                homeInfoDescriptionText
            ),
            React.createElement(
                ReactRouterDOM.Link,
                {to: '/about', className: 'btn btn-light'},
                'Read More'
            )
        )
);

export default HomeInfoSection;