var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/js/logo_timing.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/js/logo_timing.js'));
});

app.get('/css/panels.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/panels.css'));
});

app.get('/css/token_sale.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/token_sale.css'));
});
app.get('/css/verticleTimelinedrew.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/verticleTimelinedrew.min.css'));
});
app.get('/css/roadmap.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/roadmap.css'));
});
app.get('/img/favicon.ico.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/favicon.ico.png'));
});
app.get('/vendor/bootstrap/css/bootstrap.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/bootstrap/css/bootstrap.min.css'));
});
app.get('/vendor/font-awesome/css/font-awesome.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/font-awesome/css/font-awesome.min.css'));
});


app.get('/vendor/magnific-popup/magnific-popup.css', function(req, res) {
    res.sendFile(path.join(__dirname + 'vendor/magnific-popup/magnific-popup.css'));
});
app.get('/css/creative.min.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/creative.min.css'));
});
app.get('/css/custom.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/custom.css'));
});
app.get('/vendor/jquery/jquery.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/jquery/jquery.min.js'));
});

app.get('/vendor/bootstrap/js/bootstrap.bundle.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/bootstrap/js/bootstrap.bundle.min.js'));
});
app.get('/vendor/jquery-easing/jquery.easing.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/jquery-easing/jquery.easing.min.js'));
});

app.get('/vendor/scrollreveal/scrollreveal.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/scrollreveal/scrollreveal.min.js'));
});
app.get('/vendor/magnific-popup/jquery.magnific-popup.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/magnific-popup/jquery.magnific-popup.min.js'));
});
app.get('/js/creative.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/js/creative.min.js'));
});

app.get('/img/world_social_custom.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/world_social_custom.jpg'));
});

app.get('/img/networks.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/networks.jpg'));
});
app.get('/img/social_network_custom.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/social_network_custom.jpg'));
});
app.get('/img/hiw.advertiser.icon.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/hiw.advertiser.icon.png'));
});
app.get('/img/hiw.myshare.icon.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/hiw.myshare.icon.png'));
});
app.get('/img/hiw.members.icon.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/hiw.members.icon.png'));
});
app.get('/img/myShare_MainComp.mp4', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/myShare_MainComp.mp4'));
});
app.get('/img/partnership.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/partnership.jpg'));
});
app.get('/img/concert.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/concert.jpg'));
});
app.get('/img/social_marketing.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/social_marketing.jpg'));
});
app.get('/img/price.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/price.jpg'));
});
app.get('/img/myShare_LoopComp.mp4', function(req, res) {
    res.sendFile(path.join(__dirname + '/img/myShare_LoopComp.mp4'));
});

app.get("/MyShare_White_Paper_1.0.pdf", function(req, res) {
    res.sendFile(path.join(__dirname + '/MyShare_White_Paper_1.0.pdf'));
});

app.get("/img/jaymoe.jpg", function(req, res) {
    res.sendFile(path.join(__dirname + '/img/jaymoe.jpg'));
});

app.get("/img/tomblessing.jpg", function(req, res) {
    res.sendFile(path.join(__dirname + '/img/tomblessing.jpg'));
});
app.get("/img/andrew.png", function(req, res) {
    res.sendFile(path.join(__dirname + '/img/andrew.png'));
});
app.get("/img/caascarby.jpg", function(req, res) {
    res.sendFile(path.join(__dirname + '/img/caascarby.jpg'));
});

app.listen(3000);


