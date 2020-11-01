'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _message = require('./model/message');

var _message2 = _interopRequireDefault(_message);

var _channel = require('./model/channel');

var _channel2 = _interopRequireDefault(_channel);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = require('passport-local').Strategy;

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
var io = (0, _socket2.default)(app.server);

//middleware
//parse application/json
app.use(_bodyParser2.default.json({
  limit: _config2.default.bodyLimit
}));

//passport config
app.use(_passport2.default.initialize());
var Account = require('./model/account');
_passport2.default.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, Account.authenticate()));
_passport2.default.serializeUser(Account.serializeUser());
_passport2.default.deserializeUser(Account.deserializeUser());

//api routes v1
app.use('/v1', _routes2.default);

// Base URL test endpoint to see if API is running
app.get('/', function (req, res) {
  res.json({ message: 'Chat API is ALIVE!' });
});

/*||||||||||||||||SOCKET|||||||||||||||||||||||*/
//Listen for connection
var typingUsers = {};

io.on('connection', function (client) {
  console.log('a user connected');
  //Listens for a new chat message
  client.on("newChannel", function (name, description) {
    //Create channel
    var newChannel = new _channel2.default({
      name: name,
      description: description
    });
    //Save it to database
    newChannel.save(function (err, channel) {
      //Send message to those connected in the room
      console.log('new channel created');
      io.emit("channelCreated", channel.name, channel.description, channel.id);
    });
  });

  //Listens for user typing.
  client.on("startType", function (userName, channelId) {
    console.log("User " + userName + " is writing a message...");
    typingUsers[userName] = channelId;
    io.emit("userTypingUpdate", typingUsers, channelId);
  });

  client.on("stopType", function (userName) {
    console.log("User " + userName + " has stopped writing a message...");
    delete typingUsers[userName];
    io.emit("userTypingUpdate", typingUsers);
  });

  //Listens for a new chat message
  client.on('newMessage', function (messageBody, userId, channelId, userName, userAvatar, userAvatarColor) {
    //Create message

    console.log(messageBody);

    var newMessage = new _message2.default({
      messageBody: messageBody,
      userId: userId,
      channelId: channelId,
      userName: userName,
      userAvatar: userAvatar,
      userAvatarColor: userAvatarColor
    });
    //Save it to database
    newMessage.save(function (err, msg) {
      //Send message to those connected in the room
      console.log('new message sent');

      io.emit("messageCreated", msg.messageBody, msg.userId, msg.channelId, msg.userName, msg.userAvatar, msg.userAvatarColor, msg.id, msg.timeStamp);
    });
  });
});
/*||||||||||||||||||||END SOCKETS||||||||||||||||||*/

app.server.listen(_config2.default.port);
console.log('Started on port ' + app.server.address().port);

module.exports = {
  app: app,
  io: io
};
//# sourceMappingURL=index.js.map