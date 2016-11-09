import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo Input"
          text="SweetAlert in React"
          type="input"
          inputType="password"
          inputPlaceholder="password"
          onConfirm={inputValue => {
            console.log(inputValue); // eslint-disable-line no-console
            this.setState({ show: false });
          }}
        />
      </div>
    );
  }
}


export default App;
