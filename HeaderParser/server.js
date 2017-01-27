var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    if (req.url === '/favicon.ico') return;
    res.json({
        ipaddress: req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});