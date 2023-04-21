
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function Calculates if it is warm or cold. 
  function calculate() { 
    
  // input temperature and set program feedback
  let age = parseInt(document.getElementById('age').value);
    
  let programFeedback = "" ;
    
  // Declare program feedback depending on age.
  if (age >= 18) {
    programFeedback = "You can go see any movie you want alone.";
  }

  else if (age >= 14) {
    programFeedback = "You can only see movies rated 14a and under";
  }

  else if (age >= 5) {
    programFeedback = "You can go see PG and G rated movies alone";
  }

  else if (age >= 0) {
    programFeedback = "You can not see any movie alone";
  }

  else {
    programFeedback = "Please enter a valid age.";
  }
  
  // output if its warm or cold
  document.getElementById('program-feedback').innerHTML = programFeedback;
  }