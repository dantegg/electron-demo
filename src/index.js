var PROTO_PATH = __dirname + '/proto/';
var grpc = require("grpc");
var hello_proto = grpc.load(PROTO_PATH).helloWorld;

console.log("path is " + __dirname);
console.log(PROTO_PATH);


