var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var users= [];

app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html");

});

io.on("connection",function(socket){
	
	users.push(socket);
	console.log("New user is Connected "+users.length);

	socket.on("disconnect",function(){
		users.splice(users.indexOf(socket),1);
		console.log("User is disconnected "+users.length);
	});
});

http.listen(4000,function(){
	console.log('server is created on port 4000');
});