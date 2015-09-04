import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo Complex"
          text="SweetAlert in React"
          showCancelButton={true}
          onConfirm={() => {
            console.log('confirm');
            this.setState({ show: false });
          }}
          onCancel={() => {
            console.log('cancel');
            this.setState({ show: false });
          }}
          onEscapeKey={() => this.setState({ show: false })}
          onOutsideClick={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}


export default App;
