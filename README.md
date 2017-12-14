# sweetalert-react

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david_img]][david_site]

> Declarative SweetAlert in React

## Introduction

`sweetalert-react` is a wrapped `sweetalert` implementation with declarative React style component APIs. There is a `show` prop available for toggling alert component's visibility. And `onConfirm`, `onCancel`, `onClose`, `onEscapeKey`, `onOutsideClick` props allow you have a fine grained control over alert component events.

## Install

```
$ npm install sweetalert-react
```

## Usage

```js
import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

// ...

render() {
  return (
    <div>
      <button onClick={() => this.setState({ show: true })}>Alert</button>
      <SweetAlert
        show={this.state.show}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => this.setState({ show: false })}
      />
    </div>
  );
}
```

You should import `sweetalert.css` from CDN, file, node_modules(sweetalert/dist/sweetalert.css) or wherever method to include this CSS file.

Checkout the full examples [here](./examples).

## Removed Options

- **timer**: You should use `setTimeout` and pass `show` as false.
- **closeOnConfirm**: You should pass `show` as false via `onConfirm`.
- **closeOnCancel**: You should pass `show` as false via `onCancel`.
- **allowEscapeKey**: You should pass `show` as false via `onEscapeKey`.
- **allowOutsideClick**: You should pass `show` as false via `onOutsideClick`.

All other options can be passed as props, see them in [Configuare Section in sweetalert document](http://t4t5.github.io/sweetalert/)

## FAQ

### Q: My alert didn't close when 'go back' or 'go forward' in browser

You can listen to history changes and set `show: false` when it is mounted. See the full example [here](https://github.com/chentsulin/sweetalert-react/blob/master/examples/history-change/components/App.js).

### Q: Can I use react component to render HTML as the alert body?

Sure, you can achieve this with `ReactDOMServer.renderToStaticMarkup`:

```js
import { renderToStaticMarkup } from 'react-dom/server';

<SweetAlert
  show={this.state.show}
  title="Demo"
  html
  text={renderToStaticMarkup(<HelloWorld />)}
  onConfirm={() => this.setState({ show: false })}
/>
```

See the full example [here](https://github.com/chentsulin/sweetalert-react/blob/master/examples/component-as-body/components/App.js). Thanks @ArkadyB for discovering the approach in [issue #53](https://github.com/chentsulin/sweetalert-react/issues/53).

## Relevant Projects

- [react-redux-sweetalert](https://github.com/chentsulin/react-redux-sweetalert)

## License

MIT © [C.T. Lin](https://github.com/chentsulin/sweetalert-react)

[npm-image]: https://badge.fury.io/js/sweetalert-react.svg
[npm-url]: https://npmjs.org/package/sweetalert-react
[travis-image]: https://travis-ci.org/chentsulin/sweetalert-react.svg
[travis-url]: https://travis-ci.org/chentsulin/sweetalert-react
[coveralls-image]: https://coveralls.io/repos/chentsulin/sweetalert-react/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/sweetalert-react?branch=master
[david_img]: https://david-dm.org/chentsulin/sweetalert-react.svg
[david_site]: https://david-dm.org/chentsulin/sweetalert-react
