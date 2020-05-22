
class HelloWorld extends React.Component {
    render() {
      return React.createElement('div', null, 'Hello World!');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(HelloWorld),
        document.getElementById('root')
    );
});
