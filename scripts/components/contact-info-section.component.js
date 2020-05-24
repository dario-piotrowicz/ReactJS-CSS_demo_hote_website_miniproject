const contacts = [
    {
        fontAwesomeIconClass: 'fas fa-hotel fa-3x',
        title:'Location',
        description:'00 Nowhere St, NoWERE'
    },
    {
        fontAwesomeIconClass: 'fas fa-phone fa-3x',
        title:'Phone Number',
        description:'(+12) 3456789012'
    },
    {
        fontAwesomeIconClass: 'fas fa-envelope fa-3x',
        title:'Email Address',
        description:'frontdesk@hoteldp.fake.com'
    }
];

const ContactInfoSection = () => {

    return React.createElement(
        'section',
        { id: "contact-info", className: "background-dark" },
        React.createElement(
            'section',
            { id: "contact-info-section" },
            contacts.map( (contact,idx) => {
                const {title, description, fontAwesomeIconClass} = contact;
                const key = `contact-info-${idx}`;
                return React.createElement(
                    InfoBox,
                    {key, title, description, forceWordBreakAll: true},
                    React.createElement('i', {className: fontAwesomeIconClass} )
                )
            })
        ),
    );
};


