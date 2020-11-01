'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _message = require('../model/message');

var _message2 = _interopRequireDefault(_message);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/message/add' - Create
  api.post('/add', _authMiddleware.authenticate, function (req, res) {
    var newMessage = new _message2.default();
    newMessage.messageBody = req.body.messageBody;
    newMessage.userId = req.body.userId;
    newMessage.channelId = req.body.channelId;
    newMessage.userName = req.body.userName;
    newMessage.userAvatar = req.body.userAvatar;
    newMessage.userAvatarColor = req.body.userAvatarColor;

    newMessage.save(function (err) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Message saved successfully' });
    });
  });

  // '/v1/message/:id' - Update
  api.put('/:id', _authMiddleware.authenticate, function (req, res) {
    _message2.default.findById(req.params.id, function (err, message) {
      if (err) {
        res.status(500).json({ message: err });
      }
      message.messageBody = req.body.messageBody;
      message.userId = req.body.userId;
      message.channelId = req.body.channelId;
      newMessage.userName = req.body.userName;
      newMessage.userAvatar = req.body.userAvatar;
      newMessage.userAvatarColor = req.body.userAvatarColor;

      message.save(function (err) {
        if (err) {
          res.status(500).json({ message: err });
        }
        res.status(200).json({ message: 'Message updated' });
      });
    });
  });

  // '/v1/message/byChannel/:channelId'
  api.get('/byChannel/:channelId', _authMiddleware.authenticate, function (req, res) {
    _message2.default.find({ 'channelId': req.params.channelId }, function (err, messages) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(messages);
    });
  });

  // '/vq/message/:id' -Delete
  api.delete('/:id', _authMiddleware.authenticate, function (req, res) {
    _message2.default.remove({
      _id: req.params.id
    }, function (err, message) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Message Successfully Removed' });
    });
  });

  // '/v1/message/' - Delete all
  api.delete('/', _authMiddleware.authenticate, function (req, res) {
    _message2.default.find({}, function (err, users) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Users All Removed' });
    });
  });

  return api;
};
//# sourceMappingURL=message.js.map