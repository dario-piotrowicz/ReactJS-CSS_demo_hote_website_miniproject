
const InfoBox = ({
                    title,
                    description,
                    backgroundClass,
                    forceWordBreakAll,
                    children
                }) => {
    return React.createElement(
        'div',
        {className: `info-box ${
            (backgroundClass ? backgroundClass : '') +
            (forceWordBreakAll ? 'word-break-all' : '')
        }`},
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
