let urls = [
  chrome.extension.getURL("images/1.jpg"),
  chrome.extension.getURL("images/2.jpg"),
  chrome.extension.getURL("images/3.jpg"),
  chrome.extension.getURL("images/4.jpg"),
  chrome.extension.getURL("images/5.jpg"),
  chrome.extension.getURL("images/6.jpg"),
  chrome.extension.getURL("images/7.jpg"),
  chrome.extension.getURL("images/8.jpg"),
  chrome.extension.getURL("images/9.jpg"),
  chrome.extension.getURL("images/10.jpg"),
  chrome.extension.getURL("images/11.jpg"),
  chrome.extension.getURL("images/12.jpg"),
  chrome.extension.getURL("images/13.jpg"),
  chrome.extension.getURL("images/14.jpg"),
  chrome.extension.getURL("images/15.jpg"),
  chrome.extension.getURL("images/16.jpg"),
  chrome.extension.getURL("images/17.jpg"),
  chrome.extension.getURL("images/18.jpg"),
  chrome.extension.getURL("images/19.jpg"),
  chrome.extension.getURL("images/20.jpg"),
  chrome.extension.getURL("images/21.jpg"),
];

let time = [60, 180, 360, 540, 720, 1440, 2880];
let choicedTime = time[Math.floor(Math.random() * time.length)] * 1000
  console.log(`Time: ${choicedTime}`);
const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve(urls[Math.floor(Math.random() * urls.length)]);
  } , choicedTime )
}).then( (url) => {
  window.open(url, url + "(1)", "width=1980,height=1280")
} )
