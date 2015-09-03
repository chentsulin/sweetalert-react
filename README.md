# sweetalert-react

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david_img]][david_site]

> Using sweetalert in React

## Motivation

A wrapped `sweetalert` implement with React style lifecycle. I add `show` prop to determinate alert should be diplayed or not, and then add `onConfirm`, `onCancel`, `onClose`, `onEscapeKey` and `onOutsideClick` props to have more controls on alert element.

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

You should import `sweetalert.css` from cdn, file, node_modules(sweetalert/dist/sweetalert.css) or anything else.

Checkout full examples [here](./examples).

## Removed Options

- **timer**: you should use `setTimeout` and pass `show` as false.
- **closeOnConfirm**: you should pass `show` as false via `onConfirm`.
- **closeOnCancel**: you should pass `show` as false via `onCancel`.
- **allowEscapeKey**: you should pass `show` as false via `onEscapeKey`.
- **allowOutsideClick**: you should pass `show` as false via `onOutsideClick`.

Other options can be passed as props, see all in [Configuare Section in sweetalert document](http://t4t5.github.io/sweetalert/)

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

