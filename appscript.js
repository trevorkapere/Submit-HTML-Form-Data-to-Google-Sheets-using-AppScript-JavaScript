const sheet=SpreadsheetApp.openByUrl('') // Insert sheet Url here //
const sheetName=sheet.getSheetByName('Sheet1')                 


function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);


try {
  const data=e.parameter;
  const timestamp = new Date(); // Get the current timestamp

  sheetName.appendRow([timestamp,data.name,data.mem_no,data.email,data.campaign,data.amount,data.trans_id]);
  

  

return ContentService.createTextOutput("Form Submitted Successfully!") 
}

finally{
    lock.releaseLock();
  }

}
