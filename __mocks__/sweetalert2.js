const sweetalert = jest.genMockFromModule('sweetalert2');

sweetalert.fire = jest.fn().mockResolvedValue(true)

module.exports = sweetalert;
