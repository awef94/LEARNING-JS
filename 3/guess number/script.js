let randomNum = parseInt(Math.random() * (10 - 0 + 1) + 0);

function Game(){
let guessNum = document.getElementById('try').value;
if(guessNum > randomNum){
  document.getElementById('message').innerHTML='Меньше бери, лошара!';
  document.getElementById('try').innerHTML='';
  }
else if(guessNum < randomNum){
  document.getElementById('message').innerHTML='Больше бери, даун!';
  document.getElementById('try').innerHTML='';
  }
else{
  document.getElementById('message').innerHTML='Красава, в точку!';
  document.getElementById('try').innerHTML='';
  }
}

function Restart(){

}
