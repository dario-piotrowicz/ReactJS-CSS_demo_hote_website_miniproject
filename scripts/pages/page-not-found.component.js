
const PageNotFound = () => {

    const title = '404 - Page Not Found';
    const description = `
        Something went wrong and the page you tried
        to reach does not appear to exist
    `;

    React.useEffect( () => {
        document.title = 'Hotel DP | 404';
    },[]);

    return React.createElement(
        'main',
        { id: 'page-not-found', className:'centering-container' },
        React.createElement(
            'i',
            {className: 'fas fa-exclamation-circle fa-10x'}
        ),
        React.createElement(
            'h1',
            {className: 'title'},
            title
        ),
        React.createElement(
            'p',
            {className: 'description'},
            description
        )
    );
}
