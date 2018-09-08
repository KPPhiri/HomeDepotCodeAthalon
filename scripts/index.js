function addNavBarListeners() {
	document.querySelector('#survey-navBtn').addEventListener('click', ()=> {
		window.location.href = 'survey.html';});
	
	document.querySelector('#coupons-navBtn').addEventListener('click', ()=> {
		window.location.href = 'coupons.html';
	});
	
	document.querySelector('#account-navBtn').addEventListener('click', ()=> {
		window.location.href = 'account.html';
	});

}

var firebaseRef = firebase.database().ref();
addNavBarListeners()
document.querySelector('#enter-btn').addEventListener('click', ()=> {
		window.location.href = 'survey.html';
		// var text = document.querySelector('#code');
		// document.getElementById("code").innerHTML ="hi"
		// console.log(text)
		// firebaseRef.child("text").set(text);
	});



