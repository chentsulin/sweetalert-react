import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: 'Test....'
    };

    setInterval(() => {
      console.log(this.state.title);
      this.setState({ title: this.state.title += '.' })
    }, 100);
  }

  render() {
    return (
      <p>
        <SweetAlert title={this.state.title} text="wait.." />
      </p>
    );
  }
}


export default App;
