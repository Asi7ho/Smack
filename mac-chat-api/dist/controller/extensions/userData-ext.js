'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../../model/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserDataExt = function () {
  function UserDataExt() {
    _classCallCheck(this, UserDataExt);
  }

  _createClass(UserDataExt, null, [{
    key: 'findUserByEmail',
    value: function findUserByEmail(email, callback) {
      _user2.default.findOne({ 'email': email }, function (err, userData) {
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, userData);
        }
      });
    }
  }]);

  return UserDataExt;
}();

exports.default = UserDataExt;
//# sourceMappingURL=userData-ext.js.map