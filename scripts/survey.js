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
var tries = 1;
var nonZero = 0;
var userSatisfaction = ["./../imgs/homeb0.png", './../imgs/homeb2.png', './../imgs/homeb3.png', './../imgs/homeb4.png'];
var questionAnswers = [0,0,0,0];
function changeCharTemp(i) {
  var total = 0;
   val  = Number(document.querySelector('input[name = "exampleRadios"]:checked').value);
   if(questionAnswers[i]== 0){
    nonZero++;
   }
   questionAnswers[i] = val;
   for(int i = 0; i < questionAnswers.length; i++) {
    totral += questionAnswers[i];
   }
    document.querySelector('#char').src = userSatisfaction[parseInt(((total/tries)-1), 10)]
}
addNavBarListeners();
addRadioBtnListeners();
