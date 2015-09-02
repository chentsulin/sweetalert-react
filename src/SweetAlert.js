import { Component, PropTypes } from 'react';
import swal from 'sweetalert';
import { pick } from 'lodash';
import mousetrap from 'mousetrap';

const ALLOWS_KEY = [
  'title',
  'text',
  'type',
  'customClass',
  'allowOutsideClick',
  'showCancelButton',
  'showConfirmButton',
  'confirmButtonText',
  'confirmButtonColor',
  'cancelButtonText',
  'imageUrl',
  'imageSize',
  'html',
  'animation',
  'inputType',
  'inputPlaceholder',
  'showLoaderOnConfirm'
];

const OVERWRITE_PROPS = {
  closeOnConfirm: false,
  closeOnCancel: false,
  allowEscapeKey: false
};


export default class SweetAlert extends Component {
  static propTypes = {

    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.oneOf(['warning', 'error', 'success', 'info', 'input']),
    allowEscapeKey: PropTypes.bool,
    customClass: PropTypes.string,
    allowOutsideClick: PropTypes.bool,
    showCancelButton: PropTypes.bool,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string, // todo
    cancelButtonText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageSize: (props, propName) => {
      if (!/^[1-9]\d*x[1-9]\d*/.test(props[propName])) {
        return new Error('imageSize should have the format like this: "80x80"');
      }
    },
    html: PropTypes.bool,
    animation: PropTypes.bool,
    inputType: PropTypes.oneOf(['text', 'password']), // todo
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    showLoaderOnConfirm: PropTypes.bool,

    show: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onEscapeKey: PropTypes.func
  }

  static defaultProps = {

    title: null,
    text: null,
    type: null,
    allowEscapeKey: true,
    customClass: null,
    allowOutsideClick: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonText: 'OK',
    confirmButtonColor: '#AEDEF4',
    cancelButtonText: 'Cancel',
    imageUrl: null,
    imageSize: '80x80',
    html: false,
    animation: true,
    inputType: 'text',
    inputPlaceholder: null,
    inputValue: null,
    showLoaderOnConfirm: false,

    show: false
  }

  constructor(props, context) {
    super(props, context);
    this._show = false;
  }

  componentDidMount() {
    this.setupWithProps(this.props);
  }

  componentWillReceiveProps(props) {
    this.setupWithProps(props);
  }

  setupWithProps(props) {
    const { show, onConfirm, onCancel, onClose, onEscapeKey } = props;
    if (show) {
      swal({
        ...pick(props, ALLOWS_KEY),
        ...OVERWRITE_PROPS
      }, isConfirm => this.handleClick(isConfirm, onConfirm, onCancel));
      this._show = true;
      this.bindEscapeKey(onEscapeKey);
    } else {
      this.handleClose(onClose, onEscapeKey);
    }
  }

  bindEscapeKey(onEscapeKey) {
    onEscapeKey && mousetrap.bind('esc', onEscapeKey);
  }

  unbindEscapeKey(onEscapeKey) {
    onEscapeKey && mousetrap.unbind('esc', onEscapeKey);
  }

  handleClick(isConfirm, onConfirm, onCancel) {
    if (isConfirm) {
      onConfirm && onConfirm(isConfirm);
    } else {
      onCancel && onCancel();
    }
  }

  handleClose(onClose, onEscapeKey) {
    if (this._show) {
      swal.close();
      unbindEscapeKey(onEscapeKey);
      onClose && onClose();
      this._show = false;
    }
  }

  render() {
    return null;
  }
}
