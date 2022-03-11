import importCss from '../utils/import-css.js';

importCss('../../styles/footer.css');

const Footer = () => React.createElement(
    'footer',
    {id: 'main-footer'},
    React.createElement(
        'p',
        {},
        'Hotel DP \u00a9 2020 All Rights Reserved'
    )
);

export default Footer;