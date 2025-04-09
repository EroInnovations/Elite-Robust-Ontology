function doPost(e) {
    try {
      // Parse JSON request body
      const requestData = JSON.parse(e.postData.contents);
  
      // Extract parameters from request
      const fileName = requestData.fileName || "NewTextFile.txt"; 
      const fileContent = requestData.content || "Empty file content"; 
      const folderId = requestData.folderId; 
  
      // Validate folderId
      if (!folderId) {
        return ContentService.createTextOutput(JSON.stringify({ error: "Missing 'folderId' parameter" }))
          .setMimeType(ContentService.MimeType.JSON);
      }
  
      // Get the specified Drive folder
      const folder = DriveApp.getFolderById(folderId);
  
      // Create the file inside the folder
      const file = folder.createFile(fileName, fileContent, MimeType.PLAIN_TEXT);
  
      // Log file creation
      console.log("File Created:", fileName, "ID:", file.getId(), "URL:", file.getUrl());
      Logger.log("File Created: " + fileName + " ID: " + file.getId() + " URL: " + file.getUrl());
  
      // Set file permissions (Anyone with the link can view)
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
      // Get file ID and URL
      const fileId = file.getId();
      const fileUrl = file.getUrl();
  
      // Return JSON response with file details
      const response = {
        message: "File successfully created",
        fileId: fileId,
        fileUrl: fileUrl
      };
  
      return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      console.log("Error:", error.message);
      Logger.log("Error: " + error.message);
  
      // Return error as JSON
      const errorResponse = { error: error.message };
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  