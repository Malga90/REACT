'use strict';

console.log('nanna');

var visibility = false;

var toggle = function toggle() {
  visibility = !visibility;
  visibilityToggle();
};

var appRoot = document.querySelector('#app');

var visibilityToggle = function visibilityToggle() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Let\'s toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Now you can see me, bastard!'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

visibilityToggle();
