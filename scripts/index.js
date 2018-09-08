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


addNavBarListeners()
document.querySelector('#enter-btn').addEventListener('click', ()=> {
		console.log("WORKINGG")
		window.location.href = 'survey.html';
	});