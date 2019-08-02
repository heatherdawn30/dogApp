'use strict';

let imageQuantity = "3";

function getDogImage() {
  imageQuantity = document.getElementById("userInput").value;
  fetch('https://dog.ceo/api/breeds/image/random/' + imageQuantity)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);

  //make a blank sting (we are slowly going to add to this)
  let images = '<div class="images-container">';
  //go through a loop, and make an HTML image each time
  for (let i=0; i < imageQuantity; i++) {
      //and add that image to the end of the string
      images = images + `<img src="${responseJson.message[i]}" class="results-img">`
  }
  images = images + '</div>'
  console.log(images);

  //now, take that large HTML string and put it into the HTML
  $('.images-container').replaceWith(images);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});