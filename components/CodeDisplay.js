import React, { Component } from 'react';
import Prism from './prism';
import './prism.css';


const code =
`
render() {
  return (
    <div>
      <button
        onClick={() => this.setState({ show: true })}
      >
        Alert
      </button>
      <SweetAlert
        show={this.state.show}
        title="Demo Complex"
        text="SweetAlert in React"
        showCancelButton
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
`;

class CodeDisplay extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div style={{ height: '100vh', fontSize: 14 }}>
        <pre style={{
          boxSizing: 'border-box',
          height: 'inherit',
          margin: 0,
          paddingLeft: 30,
        }}
        >
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    );
  }
}


export default CodeDisplay;
