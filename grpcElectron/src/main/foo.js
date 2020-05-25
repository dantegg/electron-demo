var fs = require('fs');
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
    }
}