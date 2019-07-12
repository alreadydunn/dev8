$(document).ready(function () {
	$('#content').hide().fadeIn(3000);
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = ', [not initialized]';
var welcome = '[not initialized]';
var sign = '[not initialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var subTotalMath = '[not initialized]';
var shipping = '[not initialized]';
var shippingMath = '[not initialized]';
var grandTotal = '[not initialized]';
var grandTotalMath = '[not initialized]';


(function () {  

initiateVars()
  
  
setTextContentById('greeting', welcome);

// Get the element that has an id of userSign then update its contents
setTextContentById('userSign', sign);

// Get the element that has an id of tiles then update its contents
setTextContentById('tiles', tiles);

// Get the element that has an id of subTotal then update its contents
setTextContentById('subTotal', subTotal);

// Get the element that has an id of shipping then update its contents
setTextContentById('shipping', shipping);

// Get the element that has an id of grandTotal then update its contents
setTextContentById('grandTotal', grandTotal);
  
  

 })();
  

// Note: textContent does not work in IE8 or earlier - see explanation on website

function setTextContentById(getId, setText) {
// Get the element that has an id of greeting
var el = document.getElementById(getId);
// Replace the content of that element with the personalized welcome message
el.textContent = setText;
}

function initiateVars() {
greeting = 'Howdy '; 
name = 'Molly!';
message = ' please check your order:';
welcome = greeting + name + message;
sign = 'Montague House';
tiles = sign.length;
subTotalMath = tiles * 5;
subTotal = '$' + subTotalMath;
shippingMath = 7;
shipping = '$' + shippingMath;
grandTotalMath = subTotalMath + shippingMath;
grandTotal = '$' + grandTotalMath;
}

function resetVars() {
greeting = '[not initialized]';
name = '[not initialized]';
message = ', [not initialized]';
welcome = 'Hello';
  setTextContentById('greeting', welcome);
sign = '';
  setTextContentById('userSign', sign);
tiles = '';
  setTextContentById('tiles', tiles);
subTotal = '';
  setTextContentById('subTotal', subTotal);
subTotalMath = '';
shipping = '';
  setTextContentById('shipping', shipping);
shippingMath = '';
grandTotal = '';
  setTextContentById('grandTotal', grandTotal);
grandTotalMath = '';
alert ("Thank You for Paying! Your Information will now be Reset");
}

 document.getElementById("action").addEventListener("click", resetVars, false);
 
 })