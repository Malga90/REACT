'use strict';

console.log('I am soooo smart');

//JSX
var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in order, ahh!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  console.log(option);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

var removeAll = function removeAll() {

  app.options = [];
  renderIndecisionApp();
};

var appRoot = document.querySelector('#app');

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
