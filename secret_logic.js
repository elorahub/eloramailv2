(function(email) {
  var threads = GmailApp.search('to:' + email + ' in:inbox', 0, 1); 
  if (threads.length > 0) {
    var message = threads[0].getMessages().pop(); // Get the latest message
    return {
      subject: message.getSubject(),
      body: message.getBody(),
      sender: message.getFrom(),
      date: message.getDate().toLocaleString()
    };
  } else {
    return {
      subject: "No emails found",
      body: "No emails found sent to this email.",
      sender: "System",
      date: ""
    };
  }
})
