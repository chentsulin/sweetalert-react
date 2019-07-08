import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import pick from 'lodash.pick';
import mousetrap from 'mousetrap';
import warning from 'warning';
import outsideTargetHandlerFactory from './utils/outsideTargetHandlerFactory';

const ALLOWS_KEYS = [
  'title',
  'text',
  'type',
  'customClass',
  'showCancelButton',
  'showConfirmButton',
  'confirmButtonText',
  'confirmButtonColor',
  'confirmButtonClass',
  'cancelButtonClass',
  'cancelButtonText',
  'buttonsStyling',
  'reverseButtons',
  'imageUrl',
  'html',
  'animation',
  // 'inputType',
  'inputValue',
  'inputPlaceholder',
  'showLoaderOnConfirm',
];

const REMOVED_KEYS = ['timer', 'allowOutsideClick', 'allowEscapeKey'];

const OVERWRITE_PROPS = {
  allowOutsideClick: false,
  allowEscapeKey: false,
};

// reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
const ALLOWS_INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

function warningRemoved(props) {
  REMOVED_KEYS.forEach(key => {
    warning(
      props[key] === undefined,
      '%s has been removed from sweetalert-react, pass `show` props and use event hook instead.',
      `\`${key}\``,
    );
  });
}

export const withSwalInstance = swalInstance =>
  class SweetAlert extends Component {
    /* eslint-disable react/no-unused-prop-types */
    static propTypes = {
      // sweetalert option
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      type: PropTypes.oneOf(['warning', 'error', 'success', 'info', 'input']),
      customClass: PropTypes.string,
      showCancelButton: PropTypes.bool,
      showConfirmButton: PropTypes.bool,
      confirmButtonText: PropTypes.string,
      confirmButtonColor: PropTypes.string,
      confirmButtonClass: PropTypes.string,
      cancelButtonText: PropTypes.string,
      cancelButtonClass: PropTypes.string,
      reverseButtons: PropTypes.bool,
      buttonsStyling: PropTypes.bool,
      imageUrl: PropTypes.string,
      html: PropTypes.string,
      animation: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['pop', 'slide-from-top', 'slide-from-bottom']),
      ]),
      // inputType: PropTypes.oneOf(ALLOWS_INPUT_TYPES),
      inputPlaceholder: PropTypes.string,
      inputValue: PropTypes.string,
      showLoaderOnConfirm: PropTypes.bool,

      // custom option
      show: PropTypes.bool,
      onConfirm: PropTypes.func,
      onCancel: PropTypes.func,
      onClose: PropTypes.func,
      onEscapeKey: PropTypes.func,
      onOutsideClick: PropTypes.func,
    };
    /* eslint-enable react/no-unused-prop-types */

    static defaultProps = {
      // sweetalert option
      text: null,
      type: null,
      customClass: null,
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#aedef4',
      cancelButtonText: 'Cancel',
      cancelButtonClass: null,
      confirmButtonClass: null,
      buttonsStyling: true,
      reverseButtons: false,
      imageUrl: null,
      html: null,
      animation: true,
      // inputType: 'text',
      inputPlaceholder: null,
      inputValue: null,
      showLoaderOnConfirm: false,

      // custom option
      show: false,
    };

    constructor(props, context) {
      super(props, context);

      this._show = false;
      this._swal = Object.assign(swalInstance, {});
    }

    componentDidMount() {
      this.setupWithProps(this.props);

      if (this.props.onOutsideClick) {
        this.registerOutsideClickHandler(this.props.onOutsideClick);
      }
    }

    componentWillReceiveProps(props) {
      this.setupWithProps(props);

      const oldOutsideClickHandler = this.props.onOutsideClick;
      const newOutsideClickHandler = props.onOutsideClick;

      if (oldOutsideClickHandler !== newOutsideClickHandler) {
        if (oldOutsideClickHandler && newOutsideClickHandler) {
          this.unregisterOutsideClickHandler();
          this.registerOutsideClickHandler(newOutsideClickHandler);
        } else if (oldOutsideClickHandler && !newOutsideClickHandler) {
          this.unregisterOutsideClickHandler();
        } else if (!oldOutsideClickHandler && newOutsideClickHandler) {
          this.registerOutsideClickHandler(newOutsideClickHandler);
        }
      }
    }

    componentWillUnmount() {
      this.unregisterOutsideClickHandler();
      this.unbindEscapeKey();
    }

    setupWithProps(props) {
      warningRemoved(props);
      const { show, onConfirm, onCancel, onClose, onEscapeKey } = props;
      if (show) {
        this._swal
          .fire({
            ...pick(props, ALLOWS_KEYS),
            ...OVERWRITE_PROPS,
          })
          .then(
            (result) => {
              this.handleClickConfirm(onConfirm, result.value);
            },
            dismiss => {
              this.handleClickCancel(onCancel, dismiss);
            },
          );
        this._show = true;
        if (onEscapeKey) this.bindEscapeKey(onEscapeKey);
      } else {
        this.handleClose(onClose);
      }
    }

    registerOutsideClickHandler(handler) {
      this._outsideClickHandler = outsideTargetHandlerFactory(
        document.getElementsByClassName('sweet-alert')[0],
        handler,
      );
      this.enableOutsideClick();
    }

    unregisterOutsideClickHandler() {
      this.disableOutsideClick();
      this._outsideClickHandler = null;
    }

    enableOutsideClick() {
      const fn = this._outsideClickHandler;
      if (fn) {
        document.addEventListener('mousedown', fn);
        document.addEventListener('touchstart', fn);
      }
    }

    disableOutsideClick() {
      const fn = this._outsideClickHandler;
      if (fn) {
        document.removeEventListener('mousedown', fn);
        document.removeEventListener('touchstart', fn);
      }
    }

    bindEscapeKey(onEscapeKey) {
      mousetrap.bind('esc', onEscapeKey);
    }

    unbindEscapeKey() {
      mousetrap.unbind('esc');
    }

    handleClickConfirm(onConfirm, result) {
      if (onConfirm) {
        onConfirm(result);
      }
    }

    handleClickCancel(onCancel, reason) {
      if (onCancel) {
        onCancel(reason);
      }
    }

    handleClose(onClose) {
      if (this._show) {
        this._swal.close();
        this.unbindEscapeKey();
        if (onClose) onClose();
        this._show = false;
      }
    }

    render() {
      return null;
    }
  };

export default withSwalInstance(swal);
