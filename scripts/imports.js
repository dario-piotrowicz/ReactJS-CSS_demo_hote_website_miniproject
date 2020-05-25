
head = document.getElementsByTagName('head')[0];

const importStyle = href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    head.appendChild(link);
}

const importScript = src => {
    document.write(`<script type="text/javascript" src="${src}" ></script>`);
}




const externalStyles = [
    "./styles/external/fonts-awesome.css"
];

const styles = [
    "./styles/common.css",
    "./styles/header.css",
    "./styles/footer.css",
    "./styles/showcase.css",
    "./styles/info-box.css",
    "./styles/home-info-section.css",
    "./styles/about-info-section.css",
    "./styles/about-testimonials-section.css",
    "./styles/contact-form.css",
    "./styles/contact-info-section.css"
];

const allStyles = [ externalStyles, styles ];
allStyles.forEach(
    stylesArray => stylesArray.forEach(
        style => importStyle(style)
    )
);



const externalScripts = [
    "./scripts/external/react.development.js",
    "./scripts/external/react-dom.development.js",
    "./scripts/external/react-router-dom.js"
];

const componentScripts = [
    "./scripts/components/header.component.js",
    "./scripts/components/footer.component.js",
    "./scripts/components/showcase.component.js",
    "./scripts/components/info-box.component.js",
    "./scripts/components/home-info-section.component.js",
    "./scripts/components/features-section.component.js",
    "./scripts/components/about-info-section.component.js",
    "./scripts/components/about-testimonials-section.component.js",
    "./scripts/components/contact-form.component.js",
    "./scripts/components/contact-info-section.component.js"
];

const pageScripts = [
    "./scripts/pages/home.component.js",
    "./scripts/pages/about.component.js",
    "./scripts/pages/contact.component.js"
];

const allScripts = [
    externalScripts,
    componentScripts,
    pageScripts,
    [ "./scripts/index.js", "./scripts/app.js" ]
];
allScripts.forEach(
    scriptsArray => scriptsArray.forEach(
        script => importScript(script)
    )
);