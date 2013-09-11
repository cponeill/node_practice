// Sms text from your computer using Twilio and Node

var twilio = require("twilio");
var client = new twilio.RestClient('ACCOUNT_SID', 'AUTH_TOKEN');

client.sms.messages.create({
        to:'The number you are sending to...',
            from:'Your twilio phone number',
            body:'Thanks for using our service....',
            }, function(error, message) {

        if (!error) {

            console.log('Everything is working great!');
            console.log(message.dateCreated);
}
else {
console.log('THERE WAS A FREAKING ERROR!');
        }
    });
