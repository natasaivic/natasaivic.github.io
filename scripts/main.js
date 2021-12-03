let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DI9A8255.JPG') {
      myImage.setAttribute('src','images/DI9A8019.JPG');
    } else {
      myImage.setAttribute('src','images/DI9A8255.JPG');
    }    

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to check my content, ' + myName + '! :)';
      }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back for my content, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  } 