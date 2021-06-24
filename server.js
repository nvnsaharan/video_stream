var express = require('express');
var path = require('path');
const dotenv = require('dotenv');

dotenv.config();

var app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/meeting/:meetingId/join', function (req, res) {
	res.render('join', { query: req.query });
});

app.get('/meeting/:meetingId', function (req, res) {
	res.render('meeting', { query: req.query });
});

PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
