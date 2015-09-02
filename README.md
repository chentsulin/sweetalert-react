# sweetalert-react

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david_img]][david_site]

> sweetalert in react

## Motivation

Use `sweetalert` with React style lifecycle. I add `show` prop to determinate alert should be diplayed or not, and then add `onConfirm`, `onCancel`, `onClose` props to have more controls on alert.

## Install

```
$ npm install sweetalert-react
```

## Usage

```js
var SweetAlert = require('sweetalert-react');

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

See full example [here](./example/simple).

## Removed Options

- **timer**: you should use `setTimeout` and change `show` prop.
- **closeOnConfirm**: you should pass `show` as false via `onConfirm`.
- **closeOnCancel**: you should pass `show` as false via `onCancel`.

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

