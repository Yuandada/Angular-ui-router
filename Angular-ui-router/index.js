var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")
    fs.readFile('index.json','utf-8',function(err,data){
    	if(err){
    		throw err
    		res.writeHead(404,{'Content-type':'text/plian;utf-8'})
    	    res.write(err)
    	}else{
    		res.writeHead(200,{'Content-type':'text/json;utf-8'})
    	    res.write(data)
    	}
    	res.end()
    })
}).listen(8085)
console.log("服务器启动")
