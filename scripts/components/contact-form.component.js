
const ContactForm = () => {

    return React.createElement(
        'section',
        { id: "contact-form", className: "background-light" },
        React.createElement(
            'div',
            {className: 'centering-container'},
            React.createElement(
                'h1',
                {},
                React.createElement(
                    'span',
                    {className: 'text-primary'},
                    'Contact '
                ), 
                ' Us'
            ),
            React.createElement(
                'p',
                {},
                'Please fill out the form below to contact us'
            ),
            React.createElement(
                'form',
                {action : null},
                React.createElement(
                    'div',
                    {className: 'form-group'},
                    React.createElement(
                        'label',
                        {htmlFor: 'name'},
                        'Name'
                    ),
                    React.createElement(
                        'input',
                        {type: 'text', name: 'name', id: 'contact-form-name'}
                    )
                ),
                React.createElement(
                    'div',
                    {className: 'form-group'},
                    React.createElement(
                        'label',
                        {htmlFor: 'email'},
                        'Email'
                    ),
                    React.createElement(
                        'input',
                        {type: 'email', name: 'email', id: 'contact-form-email'}
                    )
                ),
                React.createElement(
                    'div',
                    {className: 'form-group'},
                    React.createElement(
                        'label',
                        {htmlFor: 'message'},
                        'Message'
                    ),
                    React.createElement(
                        'textarea',
                        {type: 'message', name: 'message', id: 'contact-form-message'}
                    )
                ),
                ),
                    React.createElement(
                        'button',
                        {className: 'btn', type: 'submit'},
                        'Submit'
                    )
        )
    );
};