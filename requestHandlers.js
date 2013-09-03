function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    "Hello Upload";
}

exports.start = start;
exports.upload = upload;
