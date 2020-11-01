"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _mongodb = require("mongodb");

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   "port": 3005,
   "mongoUrl": "mongodb://localhost:27017/chat-api",
   //"port": process.env.PORT,
   //"mongoUrl": "mongodb://Asitho:123456@ds247347.mlab.com:47347/smackchatlesson",
   "bodyLimit": "100kb"
};
//# sourceMappingURL=index.js.map