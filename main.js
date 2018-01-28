let urls = [
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/1.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/2.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/3.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/4.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/5.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/6.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/7.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/8.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/9.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/10.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/11.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/12.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/13.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/14.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/15.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/16.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/17.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/18.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/19.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/20.jpg",
  "chrome-extension://kiaddlfdldhfcgeiiiddablhpjdppnbj/images/21.jpg",
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
