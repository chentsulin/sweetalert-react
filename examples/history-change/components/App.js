import React, { Component } from 'react';
import shortid from 'shortid';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.hiddenAlert);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.hiddenAlert);
  }

  hiddenAlert = () => {
    this.setState({ show: false });
  };

  pushNextState = () => {
    history.pushState(null, 'next', shortid.generate());
  };

  render() {
    return (
      <div>
        <button onClick={this.pushNextState}>Next Page</button>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={this.hiddenAlert}
        />
      </div>
    );
  }
}


export default App;
