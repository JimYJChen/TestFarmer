// const mapBtn = document.querySelector(".navbar-group--icon[alt='Map']");
// const main_doc = chrome.extension.getBackgroundPage();
// $('#button1').click(()=>{
//   console.log("asd");
//   console.log(mapBtn);
//   console.log(main_doc);
// })

// chrome.tabs.executeScript({
//   code: 
//   test()
// });

// function test(){
//   const mapBtn = document.querySelector(".navbar-group--icon[alt='Map']");
//   mapBtn.click();
// }

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // Injects JavaScript code into a page
  chrome.tabs.executeScript(tabs[0].id, {file: "inject.js"});
});