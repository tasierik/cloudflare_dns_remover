//Functions to insert in console
function deleteRecord() {
  document.querySelector("[data-testid='dns-table-row-edit-link']").click();
  setTimeout(function () {
    document
      .querySelector("[data-testid='dns-table-row-expanded'] button")
      .click();
    var button = document.getElementsByTagName("button");
    for (var i = 0; i < button.length; i++) {
      if (button[i].innerHTML === "<span>Delete</span>") {
        button[i].click();
      }
    }
  }, 300);
}
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//Run if you have pasted the above
for (let j = 0; j < 50; j++) {
  deleteRecord();
  await delay(3000);
}
