/**
 * 1.Date Object:
a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
b. Implement the function to display the day of the week for the current date.
 * 
 */

function showDaymodule(inputdate) {
  const d = new Date(inputdate);
  let day = d.getDay();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayname = weekday[day];
  return(
    "Q1. The day of the given date is " + day + " and the name is " + dayname
  );
}

console.log(showDaymodule("2023-07-15")) ;

/**
 * 2.Math Object:
a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
b. Implement the function to display the square root of the sum of squares for an array of numbers
 * 
 */

function showsqrtarrofNum(inputarr) {
  var sum = 0,
    i = inputarr.length;
  while (i--) 
    sum += Math.pow(inputarr[i], 2);
  return sum + ' ' + Math.sqrt( sum );
}

console.log('Q2. The sum of squares and square root of those numbers are ',showsqrtarrofNum([0,1,2,3,4]));

/**
 * 3.Numbers:
a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
b. Implement the function to check if a given positive integer is a prime number.
 * 
 */

function showPrime(inputnum){
    
    let isPrime = true;
    if(inputnum === 1){
        console.log("Q3. 1 is neither prime nor composite number.");
    }else if(inputnum > 1){
        for (let i = 2; i < inputnum; i++) {
            if (inputnum % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`Q3. ${inputnum} is a prime number`);
        } else {
            console.log(`Q3. ${inputnum} is a not prime number`);
        }
    } else if(inputnum < 0){
        console.log(`Q3. ${inputnum} is a negetive number and is not alowed`);
    }
}

showPrime(-110);

/**
 * 4.Window Object:
a. Create a function that opens a new window with a specified URL and dimensions (width and height).
b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
*/

function openWinspdimension(url, width, height){
    window.open(url, "width="+ width + " ,height="+height+"");
}

// openWinspdimension('https://www.example.com', 800, 600)

/*
5.Navigator Object:
a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
b. Implement the function to display the user's browser name and version.
*/

function detectUserend(){
  let browserInfo = navigator.userAgent;
  let browserVersion = navigator.appVersion ;
  let browser;
        if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
          browser = 'Opera';
        } else if (browserInfo.includes('Edg')) {
          browser = 'Edge';
        } else if (browserInfo.includes('Chrome')) {
          browser = 'Chrome';
        } else if (browserInfo.includes('Safari')) {
          browser = 'Safari';
        } else if (browserInfo.includes('Firefox')) {
          browser = 'Firefox'
        } else {
          browser = 'unknown'
        }
          return browser + ' ' + browserVersion;
}

document.addEventListener("DOMContentLoaded", function () {
  let content = document.querySelector("#bruser");
  const browserName = detectUserend();
  content.innerHTML = `You are currently on a ${browserName} browser`;
});

/**
 * 6.Geolocation:
a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
 */

function geoUserloc(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log('Not supported')
  }

  function showPosition(position){
    console.log('Q6', position.coords.latitude)
    console.log(position.coords.longitude)
  }
}
geoUserloc()

/**
 * 
 * 7.JS Common Events:
Implement a webpage with the following functionality:
a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
c. When the user moves the mouse over an image, change the image source to another image of your choice.
 */

function printMousePos(event) {
  document.body.textContent =
    alert("clientX: " + event.clientX +
    " - clientY: " + event.clientY);
}

//document.addEventListener("click", printMousePos)


function myKeyPress(e){
  var keynum;

  if(window.event) {                 
    keynum = e.keyCode;
  } else if(e.which){                
    keynum = e.which;
  }

  alert(String.fromCharCode(keynum));
}

function alterImage(img){
  img.src = 'sad.jpg';
}


/**
 * 
 * 8.HTML DOM Document:
a. Create a webpage with a button and a paragraph element.
b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
 */

function altertext(){
  document.getElementById("content").innerHTML = "Button Clicked!"
}