const cv2 = require('opencv4nodejs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index');
});

const FPS = 100;
const Vcap = new cv2.VideoCapture(0);
Vcap.set(cv2.CAP_PROP_FRAME_WIDTH, 300);
Vcap.set(cv2.CAP_PROP_FRAME_HEIGHT, 300);

setInterval(() => {
    const frame = Vcap.read();
    const image = cv2.imencode('.jpg', frame).toString('base64');
    io.emit('image', image);
}, 1000 / FPS);

server.listen(3030, () => console.log('narenltk says open up your browser'));
