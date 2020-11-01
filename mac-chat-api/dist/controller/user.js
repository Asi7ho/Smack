'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _user = require('../model/user');

var _user2 = _interopRequireDefault(_user);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/user/add' - Create
  api.post('/add', _authMiddleware.authenticate, function (req, res) {
    var newUser = new _user2.default();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.avatarName = req.body.avatarName;
    newUser.avatarColor = req.body.avatarColor;

    newUser.save(function (err) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(newUser);
    });
  });

  // '/v1/user/' - Read
  api.get('/', _authMiddleware.authenticate, function (req, res) {
    _user2.default.find({}, function (err, users) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(users);
    });
  });

  // '/v1/user/:id' - Read 1
  api.get('/:id', _authMiddleware.authenticate, function (req, res) {
    _user2.default.findById(req.params.id, function (err, user) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(user);
    });
  });

  // '/v1/user/:id' - Update
  api.put('/:id', _authMiddleware.authenticate, function (req, res) {
    _user2.default.findById(req.params.id, function (err, user) {
      if (err) {
        res.status(500).json({ message: err });
      }
      user.name = req.body.name;
      user.email = req.body.email;
      user.avatarName = req.body.avatarName;
      user.avatarColor = req.body.avatarColor;
      user.save(function (err) {
        if (err) {
          res.status(500).json({ message: err });
        }
        res.status(200).json({ message: 'User info updated' });
      });
    });
  });

  // 'v1/user/byEmail/:email'
  api.get('/byEmail/:email', _authMiddleware.authenticate, function (req, res) {
    _user2.default.findOne({ 'email': req.params.email }).exec(function (err, userData) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(userData);
    });
  });

  // '/vq/user/:id' -Delete
  api.delete('/:id', _authMiddleware.authenticate, function (req, res) {
    _user2.default.remove({
      _id: req.params.id
    }, function (err, user) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'User Successfully Removed' });
    });
  });

  // '/v1/user/' - Delete all
  api.delete('/', _authMiddleware.authenticate, function (req, res) {
    _user2.default.find({}, function (err, users) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Users All Removed' });
    });
  });

  return api;
};
//# sourceMappingURL=user.js.map