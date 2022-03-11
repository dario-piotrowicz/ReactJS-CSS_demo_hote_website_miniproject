import ContactForm from "../components/contact-form.component.js";
import ContactInfoSection from "../components/contact-info-section.component.js";

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

export default Contact;