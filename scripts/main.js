let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nata_i_vlada_2.jpg') {
      myImage.setAttribute('src','images/nata_i_vlada.jpg');
    } else {
      myImage.setAttribute('src','images/nata_i_vlada_2.jpg');
    }    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName) {
//         setUserName();
//       } else {
//         localStorage.setItem('name', myName);
//         myHeading.textContent = 'Welcome to check my content, ' + myName + '! :)';
//       }
//   }

//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Welcome back for my content, ' + storedName;
//   }

//   myButton.onclick = function() {
//     setUserName();
//   }