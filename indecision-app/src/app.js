console.log('I am soooo smart');

//JSX
const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in order, ahh!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const removeAll = () => {

  app.options = [];
  renderIndecisionApp();
};



const appRoot = document.querySelector('#app');

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll} >Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};


renderIndecisionApp();
