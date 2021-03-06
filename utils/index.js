const protoLoader = require('@grpc/proto-loader')


var readPackageDefinition = function (path) {
    // 读取文件的路径
    const PROTO_PATH = `${__dirname}/${path}`
    // see https://github.com/grpc/grpc-node/tree/master/packages/proto-loader
    // 使用protoLoader加载proto文件
    const packageDefinition = protoLoader.loadSync(
      PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
    return packageDefinition
  }

module.exports.readPackageDefinition = readPackageDefinition