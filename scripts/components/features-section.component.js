
const features = [
        {
            fontAwesomeIconClass: 'fas fa-hotel fa-3x',
            title:'Great Location',
            description:'fu trota!'
        },
        {
            fontAwesomeIconClass: 'fas fa-utensils fa-3x',
            title:'Free Meals',
            description:'all you can eat!'
        },
        {
            fontAwesomeIconClass: 'fas fa-dumbbell fa-3x',
            title:'Fitness Room',
            description:'exercise!!!'
        }
];

const FeaturesSection = () => React.createElement(
        'section',
        { id: "features-section" },
        features.map( (feature,idx) => {
            const {title, description, fontAwesomeIconClass} = feature;
            const backgroundClass = idx%2 ? 'background-primary' : 'background-light' ;
            const key = `feature-${idx}`;
            return React.createElement(
                InfoBox,
                {key, title, description, backgroundClass},
                React.createElement('i', {className: fontAwesomeIconClass} )
            )
        })
);