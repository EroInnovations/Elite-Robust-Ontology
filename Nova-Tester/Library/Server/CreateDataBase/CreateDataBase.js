function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var databaseName = requestData.sheetName;
  
    // Search for an existing spreadsheet with the same name
    var files = DriveApp.getFilesByName(databaseName);
    if (files.hasNext()) {
      // If a spreadsheet with the same name exists, return an error message
      var message = `A spreadsheet with the name '${databaseName}' already exists. Please choose a different name.`;
      var response = {
        message: message,
        error: true
      };
      
      return ContentService.createTextOutput(JSON.stringify(response))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    // Create a new blank spreadsheet with the specified name
    var newSpreadsheet = SpreadsheetApp.create(databaseName);
    var newDatabase = newSpreadsheet.getSheets()[0]; // Get the default first sheet
    newDatabase.setName(databaseName); // Rename the first sheet to the desired name
  
    var message = `New spreadsheet '${databaseName}' successfully created.`;
  
    var response = {
      message: message,
      spreadsheetUrl: newSpreadsheet.getUrl(), // URL of the new spreadsheet
      spreadsheetId: newSpreadsheet.getId(),   // ID of the new spreadsheet
      databaseId: newDatabase.getSheetId(),    // ID of the new sheet
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
  }