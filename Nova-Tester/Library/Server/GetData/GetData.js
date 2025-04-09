function doPost(e) {
    try {
      var requestData = JSON.parse(e.postData.contents);
      var spreadsheetUrl = requestData.spreadsheetUrl;
      var sheetName = requestData.sheetName;
  
      // Extract the spreadsheet ID from the URL
      var spreadsheetId = extractSpreadsheetId(spreadsheetUrl);
      if (!spreadsheetId) {
        return createErrorResponse("Invalid spreadsheet URL.");
      }
  
      // Open the spreadsheet by its ID
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
      // Get the sheet by name
      var sheet = spreadsheet.getSheetByName(sheetName);
      if (!sheet) {
        return createErrorResponse(`Sheet with the name '${sheetName}' does not exist.`);
      }
  
      // Get all data from the sheet
      var data = sheet.getDataRange().getValues();
  
      // Convert the data to JSON format
      var headers = data[0]; // First row as headers
      var jsonData = [];
  
      for (var i = 1; i < data.length; i++) {
        var rowObject = {};
        for (var j = 0; j < headers.length; j++) {
          rowObject[headers[j]] = data[i][j];
        }
        jsonData.push(rowObject);
      }
  
      // Return the data in JSON format
      return ContentService.createTextOutput(JSON.stringify(jsonData))
                           .setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      // Return the error message if something goes wrong
      return createErrorResponse("An error occurred: " + error.message);
    }
  }
  
  // Function to extract the spreadsheet ID from the URL
  function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return matches ? matches[1] : null;
  }
  
  // Function to create an error response
  function createErrorResponse(message) {
    var response = {
      message: message,
      error: true
    };
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  