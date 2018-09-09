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

var nonZero = 0;
var userSatisfaction = ["./../imgs/homeb0.png", './../imgs/homeb2.png', './../imgs/homeb3.png', './../imgs/homeb4.png', './../imgs/homeb5.png'];
var questionAnswers = [0,0,0,0,0,0,0];


function addRadioBtnListeners1(q) {
    var radioButtons = document.getElementsByName(q);
    for (var i = 0; i < 5; i++) {
      radioButtons[i].onclick = function() {
      var total = 0;
      var val  = Number(document.querySelector('input[name = "'+q+'"]:checked').value);
      if(questionAnswers[0]== 0){
        nonZero++;
      }
      questionAnswers[0] = val;
      for(var k = 0; k < questionAnswers.length; k++) {
        total += questionAnswers[k];
        console.log("TOTAL IS: " + total);
      }
      console.log("total: " + total + " nonZero: " + nonZero + " index: " + parseInt(((total/nonZero)), 10));
      document.querySelector('#char').src = userSatisfaction[parseInt(((total/nonZero))-1, 10)]
      }
    }

  }



addNavBarListeners();
for (var i = 1; i < 8; i++) {
  addRadioBtnListeners1("q" + i);
}
