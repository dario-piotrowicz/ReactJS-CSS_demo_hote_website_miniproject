
const InfoBox = ({ title, description, backgroundClass, children }) => {
    return React.createElement(
        'div',
        {className: `info-box ${backgroundClass ? backgroundClass : ''}`},
        children,
        React.createElement(
            'h1',
            {},
            title
        ),
        React.createElement(
            'p',
            {},
            description
        )
    );
};
