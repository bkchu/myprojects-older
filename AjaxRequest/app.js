var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.get('/', function (req, res){
   res.render('ajax.ejs');
});

app.post('/ajax', function(req, res){
   console.log(req);
   console.log('req received');
   console.log(req.body.field1, req.body.field2);
   res.redirect('/');

});

app.listen(8888);
