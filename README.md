# sweetalert2-react

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david_img]][david_site]

> Declarative SweetAlert in React

## Introduction

This package is forked from https://github.com/chentsulin/sweetalert-react and adopted for https://github.com/limonte/sweetalert2

## Install

```
$ npm install sweetalert2-react
```

## Usage

```js
import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';

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

You should import `sweetalert2.css` from 'sweetalert2-react/src/sweetalert2.css'.

Checkout full examples https://github.com/chentsulin/sweetalert-react

## Tests

Test were not updated to support sweetalert2. PRs are welcome.

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
