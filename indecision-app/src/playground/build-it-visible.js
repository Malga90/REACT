class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }

  handleToggleVisibility() {
    this.setState(() => {
      return {
        isVisible: !this.state.isVisible
      }
    });
    // this.setState((prevState) => {
    //   return {
    //     isVisible: !prevState.isVisible
    //   }
    // });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>Click me to toggle!</button>
        {
          this.state.isVisible && (
            <div>
              <p>
                Now you can see me, bastard!
              </p>
            </div>
            )
        }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;
//
//
// const toggle = () => {
//   visibility = !visibility;
//   visibilityToggle();
// };
//
// const appRoot = document.querySelector('#app');
//
//
// const visibilityToggle = () => {
//   const template = (
//     <div>
//       <h1>Let's toggle</h1>
//       <button onClick={toggle}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {
//         visibility && (
//           <div>
//             <p>
//               Now you can see me, bastard!
//             </p>
//           </div>
//         )
//       }
//
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
//
// visibilityToggle();
