var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 8000,
    path: '/',
    headers: {
        'Accept': 'application/json'
    }
};

var buffer_corpo_res = [];

http.get(opcoes, function(res){

    res.on('data', function(pedaco){
        buffer_corpo_res.push(pedaco);
    });

    res.on('end', function(){
        var corpo_response = Buffer.concat(buffer_corpo_res).toString();
        console.log(corpo_response);
    })
})