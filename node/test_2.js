var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).query;
    // var obj=querystring.parse(pathname);
    // var arr=pathname.split('=');
    switch (
    pathname
    ) {
        case '/':
            getIndex(res);
            break;
        case '/parse':
            getData(req, res);
            break;
        default:
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.end('页面找不到');

    }

}).listen(3000);
console.log('serve start');
 function getIndex(res)
{
    var pathname = __dirname + '/' + url.parse('1.html').pathname;
    var data = fs.readFileSync(pathname,"utf-8");
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(data);
}
function getData(req,res) {
    var postData='';
    req.setEncoding('utf8');
    reqaddlistener('data',function(postChunkData){
        propsData+=postChunkData;

    })
    req.addListener('end',function(){
        var data=querystring.parse(postData);
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(data.name);
    })
    
}
//console.log(obj);

// timer global process.nexttick console 