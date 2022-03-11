
const AboutInfoSection = () => {

    const aboutText1 = `
        Again this is not a real hotel, I know it may look so
        enticing that you want to book a room imediately, but
        understand that I'm just a simple web developer who is
        making a demo website.
    `;

    const aboutText2 = `
        Obviously none of this is to be taken seriously, I'm just trying
        to put some text in the site! (and I guess this is better
        than just Lorem Ipsum).
   `;

    return React.createElement(
        'section',
        { id: "about-info-section", className: "background-light " },
            React.createElement(
                'div',
                {className: 'about-info-description'},
                React.createElement(
                    'h1',
                    {},
                    React.createElement(
                        'span',
                        {className: 'text-primary'},
                        'About'
                    ),
                    ' Hotel DP'
                ),
                React.createElement(
                    'p',
                    {},
                    aboutText1
                ),
                React.createElement(
                    'p',
                    {},
                    aboutText2
                ),
            ),
            React.createElement(
                'div',
                {className: 'about-info-img'},
                React.createElement(
                    'img',
                    { src: 'images/photo-2.jpg', alt: 'hotel'}
                )
            )
    );
};