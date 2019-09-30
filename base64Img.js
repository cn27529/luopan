var base64Img = require('base64-img');

base64Img.base64('path/demo.png', function(err, data) {
    console.log(data);
});