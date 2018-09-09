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
var userSatisfaction = ["./../imgs/homeb1.png", './../imgs/homeb2.png', './../imgs/homeb3.png', './../imgs/homeb4.png', './../imgs/homeb5.png'];
var questionAnswers = [0,0,0,0,0,0,0];


function addRadioBtnListeners1(q) {
    var radioButtons = document.getElementsByName("q" + q);
    for (var i = 0; i < 5; i++) {
      radioButtons[i].onclick = function() {
        var total = 0;
        var val  = Number(document.querySelector('input[name = "'+ "q" + q+'"]:checked').value);
        console.log("getting: " + (q-1));
        if(questionAnswers[q-1]== 0){
          nonZero++;
        }
        questionAnswers[q-1] = val;
        for(var k = 0; k < questionAnswers.length; k++) {
          total += questionAnswers[k];
          
        }
        console.log("TOTAL IS: " + total);
        console.log("Array: " + questionAnswers)
        console.log("Average is: " + (Math.round((total/nonZero))-1));
        document.querySelector('#char').src = userSatisfaction[(Math.round((total/nonZero)-.9))]
    }
    }

  }

    document.querySelector('#submit').addEventListener('click', ()=> {
      document.querySelector('#gift').style.visibility = "visible";
      document.querySelector('.reward').style.visibility = "visible";
 

   });

    document.querySelector('#ok').addEventListener('click', ()=> {

      window.location.href = 'coupons.html';
   });

    document.querySelector('.tiny-bubble').addEventListener('click', ()=> {
      if(document.querySelector('.bubble').style.visibility == "visible") {
            document.querySelector('.bubble').style.visibility = "hidden";

      } else {
            document.querySelector('.bubble').style.visibility = "visible";

      }

   });




addNavBarListeners();
for (var i = 1; i < 8; i++) {
  addRadioBtnListeners1(i);
}
