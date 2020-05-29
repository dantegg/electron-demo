var grpc = require('grpc');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, '../../protos/helloworld.proto');
console.log("grpc proto : " + PROTO_PATH);

const testProto = grpc.load(PROTO_PATH).helloworld;

const client = new testProto.Greeter('0.0.0.0:50051', grpc.credentials.createInsecure());

client.SayHello({name:'test', city:11}, function(err, response) {
    console.log("result is ->", response);
})

// const testProto = grpc.load(PROTO_PATH).testPackage
 
// const client = new testProto.testService('0.0.0.0:50051',
//                                        grpc.credentials.createInsecure());
 
// client.ping({}, function(err, response) {
//     console.log('ping -> :', response.message);
// });

