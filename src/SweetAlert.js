import { Component, PropTypes } from 'react';
import swal from 'sweetalert';


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
    closeOnConfirm: PropTypes.bool,
    closeOnCancel: PropTypes.bool,
    imageUrl: PropTypes.string,
    imageSize: PropTypes.string, // todo
    timer: PropTypes.number,
    html: PropTypes.bool,
    animation: PropTypes.bool,
    inputType: PropTypes.oneOf(['text', 'password']), // todo
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    showLoaderOnConfirm: PropTypes.bool
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
    closeOnConfirm: true,
    closeOnCancel: true,
    imageUrl: null,
    imageSize: '80x80',
    timer: null,
    html: false,
    animation: true,
    inputType: 'text',
    inputPlaceholder: null,
    inputValue: null,
    showLoaderOnConfirm: false
  }

  componentDidMount() {
    this._swal = swal(this.props);
  }

  componentWillReceiveProps(props) {
    this._swal = swal(props);
  }

  componentWillUnmount() {
    this._swal = null;
  }

  render() {
    return null;
  }
}
