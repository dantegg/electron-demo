const path = require('path');
const grpc = require('grpc');
const orm = require("orm");



module.exports = {
    getTest() {
        console.log("test!!!");
        fs.writeFile('./test.md', 'this is a demo test', function(error) {
            if(error) {
                console.log('fail');
            } else {
                console.log('success');
            }
        });
    },

    sendGrpcRequest() {
        console.log("test grpc123 send success !!!!");
        console.log("begin grpc");
        const PROTO_PATH = path.resolve(__dirname, '../../protos/helloworld.proto');
        console.log("grpc proto : " + PROTO_PATH);
        console.log("grpc step 1");
        const testProto1 = grpc.load(PROTO_PATH).helloworld;

        const client = new testProto1.Greeter('0.0.0.0:50051', grpc.credentials.createInsecure());

        client.SayHello({name:'test', city:'11'}, function(err, response) {
            console.log("get result success");
            console.log("result is ->", response);
        })

        const testProto = grpc.load(PROTO_PATH).testPackage
 
        const client1 = new testProto.testService('0.0.0.0:50051',
                                       grpc.credentials.createInsecure());
 
        client1.ping({}, function(err, response) {
            console.log('ping -> :', response.message);
        });
    }
}