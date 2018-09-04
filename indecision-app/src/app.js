console.log('I am soooo smart');

//JSX
const appObject = {
  title: 'Indecision app',
  subtitle: 'Put your life in order',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    {/* <p>{appObject.subtitle ? appObject.subtitle : undefined}</p> */}
    <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  </div>
);

const user = {
  name: 'Syrena',
  age: 27,
  location: 'Oslo'
};

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : undefined}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.querySelector('#app');


ReactDOM.render(template, appRoot);
