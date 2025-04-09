function doPost(e) {
    // Parse JSON data from the request body
    var jsonData = JSON.parse(e.postData.contents);
    
    // Extract necessary data from JSON
    var recipientEmail = jsonData.recipientEmail;
    var subject = jsonData.subject;
    var body = jsonData.body;
    
    try {
        // Send the email
        GmailApp.sendEmail(recipientEmail, subject, body);
        
        // Construct JSON response
        var response = {
            status: "success",
            message: "Email sent successfully."
        };
        
        return ContentService.createTextOutput(JSON.stringify(response))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        // Construct JSON error response
        var errorResponse = {
            status: "error",
            message: "Failed to send email: " + error.toString()
        };
        
        return ContentService.createTextOutput(JSON.stringify(errorResponse))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
