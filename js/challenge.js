let counter = document.getElementById('counter')

//setInterval starts the counter
let nIntervID = setInterval(function(){ 
  counter.innerHTML = parseInt(counter.innerHTML) + 1; }, 1000);

//pause.add... uses nIntervID to stop the counter
let pause = document.getElementById('pause')
pause.addEventListener('click', function(){
  if (pause.innerText === "pause"){
    clearInterval(nIntervID)
    pause.innerText = 'resume'
  }else{
    pause.innerText = 'pause'
  }
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
heart.addEventListener('click', function(){
  let likes = document.querySelector('.likes');
  let count = parseInt(counter.innerText)
  let li = document.createElement('li')
  li.innerText = `${count} has been liked 1 time.`
  likes.appendChild(li)
})
 

let list = document.getElementById('list')

let comment = document.getElementById('comment-form')

function commentPage(){

}