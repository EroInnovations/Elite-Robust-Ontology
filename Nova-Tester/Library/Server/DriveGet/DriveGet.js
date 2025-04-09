function doPost(e) {
    try {
      // Parse the JSON body of the POST request to get the fileId
      const params = JSON.parse(e.postData.contents);
      const fileId = params.fileId; // Extract the fileId from the request body
  
      if (!fileId) {
        throw new Error("File ID is required.");
      }
  
      // Retrieve the file using the fileId
      const file = DriveApp.getFileById(fileId);
      const blob = file.getBlob();
      const content = blob.getDataAsString("UTF-8"); // Ensure proper text encoding
  
      // Log the file content for debugging purposes
      console.log("File Content:", content);
      Logger.log("File Content: " + content);
  
      // Return the file content as plain text in the response
      return ContentService.createTextOutput(content)
        .setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      console.log("Error:", error.message); // Log errors
      Logger.log("Error: " + error.message);
  
      // Return error message if something goes wrong
      return ContentService.createTextOutput("Error: " + error.message)
        .setMimeType(ContentService.MimeType.TEXT);
    }
  }
  