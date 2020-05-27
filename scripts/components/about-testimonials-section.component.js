
const testimonialCard = ({ imgSrc, text }) => React.createElement(
    'div',
    {className: 'testimonial-card background-primary'},
    React.createElement(
        'img',
        { src: imgSrc, alt: 'Person' }
    ),
    React.createElement(
        'p',
        {},
        text
    ),
    React.createElement(
        'div',
        {className: 'clr'}
    )
);

const AboutTestimonialsSection = () => {

    const testimonialText1 = `
        My name is Rachel, I honeslty do not think this hotel is real, I mean, 
        there are too few info, no location, no pricing, nothing!
        And all around it does seems like some website made in a day without (maybe
        for learning purposes). So even though I haven't really tried booking a room
        I just wanted to tell you to be skeptical and if I were you I definitely 
        would not trust this website!
    `;

    const testimonialText2 = `
        Hello I am Gina and I kind og agree with Reahel, this website though amazing
        does not seem to portray a real hotel. I bet some really awesome web developer
        just made it, just to refresh his CSS basics of something of that sort. Not sure
        but it would be really cool if that developer even implemented the website using
        React without JSX, and all the standard tooling. That'd be sort of a fun
        challenge I guess.
   `;

    return React.createElement(
        'section',
        { id: "about-testimonials-section" },
        React.createElement(
            'div',
            {className: 'centering-container'},
            React.createElement(
                'h2',
                {},
                'What Our Guests Say'
            ),
            React.createElement(
                testimonialCard,
                {
                     imgSrc: '../images/person-1.jpg',
                     text: testimonialText1
                }
            ),
            React.createElement(
                testimonialCard,
                {
                     imgSrc: '../images/person-2.jpg',
                     text: testimonialText2
                }
            )
        )
    );
};