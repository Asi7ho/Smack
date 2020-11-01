'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (callback) {
  var db = void 0;
  // Connect to the database before starting the application server.
  _mongoose2.default.connect(_config2.default.mongoUrl, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(_config2.default.mongoUrl);
    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");
    callback(db);
  });
};
//# sourceMappingURL=db.js.map