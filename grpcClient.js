// proto文件路径
var PROTO_PATH = __dirname + '/protos/helloworld.proto';
// 加载grpc模块
var grpc = require('grpc');
// 加载包配置
var hello_proto = grpc.load(PROTO_PATH).helloworld;
// 主函数
function main() {
   // 创建2个客户端
  var client = new hello_proto.Greeter('localhost:50051',grpc.credentials.createInsecure());
  // 定义请求参数 使用附带参数如果有 如: node client.js 123
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  // 调用接口方法
  client.sayHello({name: user}, function(err, response) {
      console.log("test is " +  response)
    console.log('sayHello服务端返回: ', response.message);
  });
}


function sendRequest(host, port, proto) {

}

module.exports.sendTest = main;

