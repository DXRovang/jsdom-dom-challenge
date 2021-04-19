let counter = document.getElementById('counter')

//setInterval starts the counter
let nIntervID = setInterval(function(){ 
  counter.innerHTML = parseInt(counter.innerHTML) + 1; }, 1000);

//pause.add... uses nIntervID to stop the counter
let pause = document.getElementById('pause')
pause.addEventListener('click', function(){
  //if the counter is running
  clearInterval(nIntervID)
  //and change the button to 'resume'
  //else if the counter isn't running
  //start the counter
  //change the button to 'pause'
})

let minus = document.getElementById('minus')
minus.addEventListener('click', function(){
  counter.innerHTML = parseInt(counter.innerHTML) - 1
})

let plus = document.getElementById('plus')
plus.addEventListener('click', function(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1
})





let heart = document.getElementById('heart');
let class = document.getElementsByClassName('likes');

function addHeart(){
  // 5 has been liked 2 times
  // 9 has been liked 1 time
}

let list = document.getElementById('list')

let comment = document.getElementById('comment-form')

function commentPage(){

}