if (typeof window === 'undefined') {
  module.exports = () => null;
} else {
  module.exports = require('./SweetAlert'); // eslint-disable-line global-require
}
