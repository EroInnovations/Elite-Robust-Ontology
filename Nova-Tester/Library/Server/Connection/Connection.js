function doGet(e) {
    // Handle GET requests
    return ContentService.createTextOutput("GET request received");
  }
  
  function doPost(e) {
    // Handle POST requests
    try {
      // Parse JSON data from the request body
      var data = JSON.parse(e.postData.contents);
      
      // Process the data as needed
      Logger.log(data);
      
      // Respond back
      return ContentService.createTextOutput("POST request received: " + JSON.stringify(data));
    } catch (error) {
      Logger.log("Error in doPost: " + error.message);
      return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  