function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var sheetName = requestData.sheetName;
    var spreadsheetUrl = requestData.spreadsheetUrl;
  
    // Extract the spreadsheet ID from the URL
    var spreadsheetId = extractSpreadsheetId(spreadsheetUrl);
  
    if (!spreadsheetId) {
      var response = {
        message: "Invalid spreadsheet URL.",
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    // Open the spreadsheet by its ID
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
    // Check if a sheet with the same name already exists
    var existingSheet = spreadsheet.getSheetByName(sheetName);
    if (existingSheet) {
      var response = {
        message: `A sheet with the name '${sheetName}' already exists in the spreadsheet. Please choose a different name.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    // Create a new sheet with the specified name
    var newSheet = spreadsheet.insertSheet(sheetName);
  
    if (!newSheet) {
      var response = {
        message: `Unable to create a new sheet with the name '${sheetName}'.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    var message = `New sheet '${sheetName}' successfully created inside the spreadsheet.`;
  
    var response = {
      message: message,
      spreadsheetUrl: spreadsheet.getUrl(), // URL of the spreadsheet
      spreadsheetId: spreadsheet.getId(),   // ID of the spreadsheet
      sheetId: newSheet.getSheetId(),        // ID of the new sheet
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)\//);
    return matches ? matches[1] : null;
  }
  