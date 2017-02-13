import React, { Component } from 'react';
import swal from 'sweetalert';
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
          title="An input!"
          text="Write something interesting:"
          type="input"
          showCancelButton
          closeOnConfirm={false}
          animation="slide-from-top"
          inputPlaceholder="Write something"
          onConfirm={inputValue => {
            if (inputValue === '') {
              swal.showInputError('You need to write something!');
              return;
            }
            this.setState({ show: false });
          }}
        />
      </div>
    );
  }
}


export default App;
