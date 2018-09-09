function addNavBarListeners() {
	document.querySelector('#back-navBtn').addEventListener('click', ()=> {
		window.location.href = 'index.html';});

	document.querySelector('#survey-navBtn').addEventListener('click', ()=> {
		window.location.href = 'survey.html';});
	
	document.querySelector('#coupons-navBtn').addEventListener('click', ()=> {
		window.location.href = 'coupons.html';
	});
	
	document.querySelector('#account-navBtn').addEventListener('click', ()=> {
		window.location.href = 'account.html';
	});
}

function addRadioBtnListeners() {
  var radioButtons = document.getElementsByName("exampleRadios");
   
  for ( var i = 0; i < 4; i++) {
    radioButtons[i].onclick = changeCharTemp
    
	}
}
var prev = 0;
var total = 0;
var tries = 1;
var userSatisfaction = ["./../imgs/homeb0.png", './../imgs/homeb2.png', './../imgs/homeb3.png', './../imgs/homeb4.png'];
function changeCharTemp() {
	total -=prev;
	prev  = Number(document.querySelector('input[name = "exampleRadios"]:checked').value);
	total += prev;
	console.log("total: " + total + " tires: " + tries + " index: " + parseInt((total/tries)-1), 10);
	 document.querySelector('#char').src = userSatisfaction[parseInt(((total/tries)-1), 10)]
}
addNavBarListeners();
addRadioBtnListeners();

