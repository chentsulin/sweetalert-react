# sweetalert-react

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david_img]][david_site]

> Declarative SweetAlert in React

## Introduction

`sweetalert-react` is a wrapped `sweetalert` implement with declarative React style component api. There is a `show` prop on it to determinate that alert should be displayed or not, and `onConfirm`, `onCancel`, `onClose`, `onEscapeKey` and `onOutsideClick` props to have more controls on alert element event.

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

You should import `sweetalert.css` from cdn, file, node_modules(sweetalert/dist/sweetalert.css) or wherever can find the css code.

Checkout full examples [here](./examples).

## Removed Options

- **timer**: You should use `setTimeout` and pass `show` as false.
- **closeOnConfirm**: You should pass `show` as false via `onConfirm`.
- **closeOnCancel**: You should pass `show` as false via `onCancel`.
- **allowEscapeKey**: You should pass `show` as false via `onEscapeKey`.
- **allowOutsideClick**: You should pass `show` as false via `onOutsideClick`.

All of other options can be passed as props, see them in [Configuare Section in sweetalert document](http://t4t5.github.io/sweetalert/)

## FAQ

### Q: My alert didn't close when 'go back' or 'go forward' in browser

You can listen history change and set `show: false` when it mounted. See full example [here](https://github.com/chentsulin/sweetalert-react/blob/master/examples/history-change/components/App.js).

### Q: Can I use react component to render html for popup body?

Sure, you can achieve it with `ReactDOMServer.renderToStaticMarkup`:

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

See full example [here](https://github.com/chentsulin/sweetalert-react/blob/master/examples/component-as-body/components/App.js). Thanks @ArkadyB for discovering the approach in [issue #53](https://github.com/chentsulin/sweetalert-react/issues/53).

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
