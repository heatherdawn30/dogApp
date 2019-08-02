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