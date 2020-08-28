const grpc = require('grpc')

var run = function(port, host, callback) {
    host = host || '0.0.0.0'
    port = port || '50051'
    const ClientObject = callback(grpc)
    const client = new ClientObject(`${host}:${port}`, grpc.credentials.createInsecure())
    this.client = client
    return client
}

module.exports.run = run 