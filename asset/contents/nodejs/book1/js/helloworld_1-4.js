// http module load
var http = require('http');
var fs = require('fs');

//http server 생성
http.createServer(function(req, res){
	//helloworld.js를 열고 읽는다.
	fs.readFile('helloworld.js', 'utf-8', function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		if(err){
			res.write('Could not find or open file reading \n');
		} else{
			res.write(data);
		}
		res.end(); //오류가 없다면 js파일을 클라이언트에게로 쓴다.
	}); // fs.readFile() end
}).listen(8124, function(){ console.log('bound to port 8124'); }); //http server end

console.log('Server running on 8214');