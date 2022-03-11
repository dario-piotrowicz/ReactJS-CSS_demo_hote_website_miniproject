
import importCss from '../utils/import-css.js';

importCss('../../styles/menu-toggle.css');

const MenuToggle = () => React.createElement(
  'div',
  {id: 'menu-toggle'},
  React.createElement(
      'input',
      {type: 'checkbox', id: 'toggle-checkbox'}
  ),
  React.createElement(
    'div',
    {id: 'hamburger-icon'},
    React.createElement(
      'div',
      {className: 'lines'}
    )
  ),
  React.createElement(
    'div',
    { className: 'menu'},
    React.createElement(
      'div',
      {},
      React.createElement(
        'div',
        {},
        React.createElement(
          'ul',
          {},
          React.createElement(
            'li',
            {},
            React.createElement(
                ReactRouterDOM.Link,
                {to: '/'},
                'Home'
            )
          ),
          React.createElement(
            'li',
            {},
            React.createElement(
                ReactRouterDOM.Link,
                {to: '/about'},
                'About'
            )
          ),
          React.createElement(
            'li',
            {},
            React.createElement(
                ReactRouterDOM.Link,
                {to: '/contact'},
                'Contact'
            )
          )
        )
      )
    ),
  )
);

export default MenuToggle;