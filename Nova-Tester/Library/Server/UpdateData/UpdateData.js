function doPost(e) {
    var requestData = JSON.parse(e.postData.contents);
    var action = requestData.action; // 'get', 'insert', or 'update'
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
  
    if (action === 'get') {
      // Get all data from the sheet
      var data = sheet.getDataRange().getValues();
      return createSuccessResponse(`Data successfully retrieved from sheet '${sheetName}'.`, { data: data });
  
    } else if (action === 'insert') {
      var headers = requestData.headers; // Array of headers
      var dataToInsert = requestData.data; // Array of data corresponding to headers
  
      // Insert headers if they don't exist
      var currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      if (!arraysEqual(headers, currentHeaders)) {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
  
      // Add an ID to the data and insert it
      var uniqueId = generateUniqueId();
      dataToInsert.unshift(uniqueId); // Add the ID to the beginning of the data array
      sheet.appendRow(dataToInsert);
  
      return createSuccessResponse(`Data inserted with unique ID '${uniqueId}'.`, { id: uniqueId });
  
    } else if (action === 'update') {
      var idToUpdate = requestData.id; // The ID to update
      var updatedData = requestData.data; // Array of updated data corresponding to headers
  
      // Find the row with the given ID and update its data
      var data = sheet.getDataRange().getValues();
      var headers = data[0];
      var idColumnIndex = headers.indexOf('ID') + 1;
      var rowToUpdate = -1;
  
      for (var i = 1; i < data.length; i++) {
        if (data[i][idColumnIndex - 1] === idToUpdate) {
          rowToUpdate = i + 1;
          break;
        }
      }
  
      if (rowToUpdate > 0) {
        for (var j = 1; j < headers.length; j++) {
          sheet.getRange(rowToUpdate, j + 1).setValue(updatedData[j - 1]);
        }
        return createSuccessResponse(`Data with ID '${idToUpdate}' successfully updated.`);
      } else {
        return createErrorResponse(`No data found with ID '${idToUpdate}'.`);
      }
    }
  
    return createErrorResponse("Invalid action specified.");
  }
  
  // Function to generate a unique ID (UUID)
  function generateUniqueId() {
    return Utilities.getUuid();
  }
  
  // Function to extract the spreadsheet ID from the URL
  function extractSpreadsheetId(url) {
    var matches = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    return matches ? matches[1] : null;
  }
  
  // Function to compare two arrays for equality
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  // Function to create a success response
  function createSuccessResponse(message, additionalData) {
    var response = {
      message: message,
      error: false
    };
    if (additionalData) {
      for (var key in additionalData) {
        if (additionalData.hasOwnProperty(key)) {
          response[key] = additionalData[key];
        }
      }
    }
    return ContentService.createTextOutput(JSON.stringify(response))
                         .setMimeType(ContentService.MimeType.JSON);
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
  