var express =  require('express');
var app = express();
var fs =  require("fs");

app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "frontpageNames.json", 'utf8', function (err, data) {
        var credits = JSON.parse(data);
        var credit = credits["credit" + req.params.id];
        console.log( credit );
        res.end(JSON.stringify(credit));
    });
})
var server =  app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example is listening at http://%s:%s",host,port)
})