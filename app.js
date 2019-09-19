var request = require('request');

function sendMessageToUser(deviceId, message,notification_title,notification_body) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': 'key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    body: JSON.stringify(
      { "data": {
        "message": message
      },notification : {
        title : notification_title,
        body : notification_body
    },
        "to" : deviceId
      }
    )
  }, function(error, response, body) {
    if (error) { 
      console.error(error, response, body); 
    }
    else if (response.statusCode!= 200) { 
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
    }
    else {
      console.log(response.body+'\n'+body)
    }
  });
}
sendMessageToUser(
  "userDeviceId here XXXXXXXXXXXX",
  { message: 'Hello World'},
  'Sample Notification',
  'Hi There...:)'
);

 