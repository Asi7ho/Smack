import mongodb from 'mongodb';

export default {
  //"port": 3005,
  //"mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://Asitho:123456@ds247347.mlab.com:47347/smackchatlesson",
  "bodyLimit": "100kb"
}
