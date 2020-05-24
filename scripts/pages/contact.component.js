
const Contact = () => {

    React.useEffect( () => {
        document.title = 'Hotel DP | Contact';
    },[]);

    return React.createElement(
        'main',
        {},
        React.createElement(ContactForm),
        React.createElement(ContactInfoSection)
    );
}
