import React, { Component } from 'react';
import SweetAlert from '../../../lib/SweetAlert'; // eslint-disable-line import/no-extraneous-dependencies
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
          showLoading={true}
          title="Demo"
          text="SweetAlert in React"
        />
      </div>
    );
  }
}


export default App;
