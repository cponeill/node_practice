function start() {
    // Console.log prints the phrase
    console.log("Request handler 'start' was called.");
    
    // The sleep function
    function sleep(milliSeconds) {
        var startTime = new Date().getTime(); // The variable startTime is assigned the current date and time
        while (new Date().getTime() < startTime + milliseconds) // While the current time is less than the startTime plus milliseconds, start() will be called. 
    }
    
    // When start() is called, Node.js waits 10 secondes until it returns "Hello Start".
    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    "Hello Upload";
}

exports.start = start;
exports.upload = upload;
