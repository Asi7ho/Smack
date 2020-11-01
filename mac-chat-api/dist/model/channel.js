"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose2.default.Schema;

var channelSchema = new Schema(_defineProperty({
  name: String, default: "",
  description: String }, "default", ""));

module.exports = _mongoose2.default.model('Channel', channelSchema);
//# sourceMappingURL=channel.js.map