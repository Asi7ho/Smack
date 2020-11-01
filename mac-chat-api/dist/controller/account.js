'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _account = require('../model/account');

var _account2 = _interopRequireDefault(_account);

var _userDataExt = require('./extensions/userData-ext');

var _userDataExt2 = _interopRequireDefault(_userDataExt);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/account/register'
  api.post('/register', function (req, res) {
    _userDataExt2.default.findUserByEmail(req.body.email, function (err, userData) {
      if (err) {
        res.status(409).json({ message: 'An error occured: ' + err.message });
      } else if (userData) {
        res.status(300).json({ message: 'Email ' + req.body.email + ' is already registered' });
      }
      // else {
      _account2.default.register(new _account2.default({ username: req.body.email }), req.body.password, function (err, account) {
        if (err) {
          res.status(500).json({ message: err });
        }
        _passport2.default.authenticate('local', { session: false })(req, res, function () {
          res.status(200).send('Successfully created new account');
        });
      });
      // }
    });
  });

  // '/v1/account/login'
  api.post('/login', function (req, res, next) {
    _userDataExt2.default.findUserByEmail(req.body.email, function (err, userData) {
      if (err) {
        res.status(409).json({ message: 'An error occured: ' + err.message });
      } else {
        next();
      }
    });
  }, _passport2.default.authenticate('local', { session: false, scope: [], failWithError: true }), function (err, req, res, next) {
    if (err) {
      res.status(401).json({ message: 'Email or password invalid, please check your credentials' });
    }
  }, _authMiddleware.generateAccessToken, _authMiddleware.respond);

  // '/v1/account/logout'
  api.get('/logout', _authMiddleware.authenticate, function (req, res) {
    res.logout();
    res.status(200).send('Successfully logged out');
  });

  api.get('/me', _authMiddleware.authenticate, function (req, res) {
    res.status(200).json(req.user);
  });

  return api;
};
//# sourceMappingURL=account.js.map