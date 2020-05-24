
const HomeInfoSection = () => {

    const descriptionText = `
     The Hotel does not actually exist, and DP stands
     for Dario Piotrowicz which is me the developer
     who is making this miniproject website.
    `;

    const img = React.createElement('div',{className: 'info-img'});

    const title = React.createElement('h2',{},
        React.createElement('span',{className: 'text-primary'},'The History'),
        ' Of Our Hotel'
    );

    const description = React.createElement('p',{},descriptionText);

    const readMoreButton = React.createElement(
        ReactRouterDOM.Link,
        {to: '/about', className: 'btn btn-light'},
        'Read More'
    );

    const content = React.createElement(
        'div',
        {className: 'info-content'},
        title,
        description,
        readMoreButton
    );


    return React.createElement(
        'section',
        { id: "home-info-section", className: "background-dark" },
        img,
        content
    );
};