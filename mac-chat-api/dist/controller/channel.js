'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _channel = require('../model/channel');

var _channel2 = _interopRequireDefault(_channel);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  //'/v1/channel/add' - Create
  api.post('/add', _authMiddleware.authenticate, function (req, res) {
    var newChannel = new _channel2.default();
    newChannel.name = req.body.name;
    newChannel.description = req.body.description;

    newChannel.save(function (err) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Channel saved successfully' });
    });
  });

  // '/v1/channel/' - Read
  api.get('/', _authMiddleware.authenticate, function (req, res) {
    _channel2.default.find({}, function (err, channels) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(channels);
    });
  });

  // '/v1/channel/:id' - Read 1
  api.get('/:id', _authMiddleware.authenticate, function (req, res) {
    _channel2.default.findById(req.params.id, function (err, channel) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json(channel);
    });
  });

  // '/vq/channel/:id' -Delete
  api.delete('/:id', _authMiddleware.authenticate, function (req, res) {
    User.remove({
      _id: req.params.id
    }, function (err, channel) {
      if (err) {
        res.status(500).json({ message: err });
      }
      res.status(200).json({ message: 'Channel Successfully Removed' });
    });
  });

  return api;
};
//# sourceMappingURL=channel.js.map