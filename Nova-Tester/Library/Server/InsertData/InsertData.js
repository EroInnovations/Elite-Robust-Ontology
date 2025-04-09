function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var spreadsheetUrl = requestData.spreadsheetUrl;
    var sheetName = requestData.sheetName;
    var headers = requestData.Headers; // Headers array
    var data = requestData.Data;       // Data array
  
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
  
    // Get the sheet by name or create a new one if it doesn't exist
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }
  
    if (!sheet) {
      var response = {
        message: `Unable to create or access a sheet with the name '${sheetName}'.`,
        error: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  
    var uniqueId = null;
  
    // Check if the sheet is empty, and if so, add the header row
    if (sheet.getLastRow() === 0) {
      var headerRow = ['ID'].concat(headers); // Create header row with 'ID' + headers from requestData
      sheet.appendRow(headerRow); // Append the header row
    }
  
    // Add an ID to the data row
    if (data && Array.isArray(data) && data.length > 0) {
      uniqueId = generateUniqueId(); // Generate a unique ID
      var dataRow = [uniqueId].concat(data); // Add the ID as the first column in the data row
  
      // Insert the data row into the sheet, starting from the next row after the headers
      sheet.appendRow(dataRow);
    }
  
    var message = `Data successfully inserted into sheet '${sheetName}' with unique ID: ${uniqueId}.`;
  
    var response = {
      message: message,
      uniqueId: uniqueId, // Return the generated ID
      spreadsheetUrl: spreadsheet.getUrl(), // URL of the spreadsheet
      spreadsheetId: spreadsheet.getId(),   // ID of the spreadsheet
      sheetId: sheet.getSheetId(),          // ID of the new or existing sheet
      error: false
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Function to generate a unique ID (UUID)
  function generateUniqueId() {
    return Utilities.getUuid();
  }
  
  function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)\//);
    return matches ? matches[1] : null;
  }
  