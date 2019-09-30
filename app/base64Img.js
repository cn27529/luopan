var base64Img = require('base64-img');

var file_path = './images/logo.png';
base64Img.base64(file_path, function(err, data) {
    console.log(data);
});