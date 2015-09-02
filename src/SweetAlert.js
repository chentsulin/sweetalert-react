import { Component, PropTypes } from 'react';
import swal from 'sweetalert';
import { pick } from 'lodash';

const ALLOWS_KEY = [
  'title',
  'text',
  'type',
  'allowEscapeKey',
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
  closeOnCancel: false
};


export default class SweetAlert extends Component {
  static propTypes = {

    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.oneOf(['warning', 'error', 'success', 'info']),
    allowEscapeKey: PropTypes.bool,
    customClass: PropTypes.string, // todo
    allowOutsideClick: PropTypes.bool,
    showCancelButton: PropTypes.bool,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string, // todo
    cancelButtonText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageSize: PropTypes.string, // todo
    html: PropTypes.bool,
    animation: PropTypes.bool,
    inputType: PropTypes.oneOf(['text', 'password']), // todo
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    showLoaderOnConfirm: PropTypes.bool,

    show: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func
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

  componentDidMount() {
    setupWithProps(this.props);
  }

  componentWillReceiveProps(props) {
    setupWithProps(props);
  }

  componentWillUnmount() {
    this._swal = null;
  }

  setupWithProps(props) {
    const { show, onConfirm, onCancel, onClose } = props;
    if (show) {
      this._swal = swal({
        ...pick(props, ALLOWS_KEY),
        ...OVERWRITE_PROPS
      }, isConfirm => this.handleClick(isConfirm, onConfirm, onCancel));
    } else {
      this.handleClose(onClose);
    }
  }

  handleClick(isConfirm, onConfirm, onCancel) {
    if (isConfirm) {
      onConfirm && onConfirm(isConfirm);
    } else {
      onCancel && onCancel();
    }
  }

  handleClose(onClose) {
    if (this._swal) {
      this._swal.close();
      onClose && onClose();
      this._swal = null;
    }
  }

  render() {
    return null;
  }
}
