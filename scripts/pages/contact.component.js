
const Contact = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | Contact';
    },[]);


    const h1 = React.createElement(
        'h1',
        {},
        'CONTACT PAGE!'
    );

    return React.createElement(
        'main',
        {},
        h1
    );
}
