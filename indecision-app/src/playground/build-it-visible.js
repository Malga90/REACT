console.log('nanna');

let visibility = false;


const toggle = () => {
  visibility = !visibility;
  visibilityToggle();
};

const appRoot = document.querySelector('#app');


const visibilityToggle = () => {
  const template = (
    <div>
      <h1>Let's toggle</h1>
      <button onClick={toggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {
        visibility && (
          <div>
            <p>
              Now you can see me, bastard!
            </p>
          </div>
        )
      }

    </div>
  );

  ReactDOM.render(template, appRoot);
};


visibilityToggle();
