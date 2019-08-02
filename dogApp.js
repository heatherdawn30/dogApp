'use strict';

const imagesTempNum = 30;

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/' + imagesTempNum)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson.message);

    //make a blank sting (we are slowly going to add to this)
    let images = "";
    //go through a loop, and make an HTML image each time
    for (let i=0; i < imagesTempNum; i++) {
        //and add that image to the end of the string
        images = images + `<img src="${responseJson.message[i]}" class="results-img">`
    }

    
    //now, take that large HTML string and put it into the HTML
    $('.results-img').replaceWith(images);
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