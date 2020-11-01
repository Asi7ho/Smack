'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _user = require('../controller/user');

var _user2 = _interopRequireDefault(_user);

var _account = require('../controller/account');

var _account2 = _interopRequireDefault(_account);

var _channel = require('../controller/channel');

var _channel2 = _interopRequireDefault(_channel);

var _message = require('../controller/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

//connect to db
(0, _db2.default)(function (db) {

  //internal middleware
  router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

  //api routes v1 (/v1)
  router.use('/user', (0, _user2.default)({ config: _config2.default, db: db }));
  router.use('/account', (0, _account2.default)({ config: _config2.default, db: db }));
  router.use('/channel', (0, _channel2.default)({ config: _config2.default, db: db }));
  router.use('/message', (0, _message2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map