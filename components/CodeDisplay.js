import React, { Component, findDOMNode } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow.css';


var code =
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
`;

class CodeDisplay extends Component {

  componentDidMount() {
    var domNode = findDOMNode(this.refs.display);
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i = i + 1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    return (
      <div style={{ fontSize: 14 }}>
        <pre ref="display">
          <code className="javascript">{code}</code>
        </pre>
      </div>
    );
  }
}


export default CodeDisplay;
