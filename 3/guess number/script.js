let randomNum = parseInt(Math.random() * (10 - 0 + 1) + 0);
console.log(randomNum);
let trying = null;
let newGame = null;

function Game(){
  let buttonInner = document.getElementById('trybutton').value;
  let guessNum = document.getElementById('try').value;
  let winMessage = document.getElementById('message').innerHTML;

if(buttonInner == 'Попробовать!'){
  if(guessNum > randomNum && guessNum != ''){
      document.getElementById('message').innerHTML='Меньше бери, лошара!';
      document.getElementById('try').value='';
    }
  else if(guessNum < randomNum && guessNum != ''){
      document.getElementById('message').innerHTML='Больше бери, даун!';
      document.getElementById('try').value='';
    }
  else if(guessNum == ''){
    document.getElementById('message').innerHTML='Введи число, дебич!';
  }
  else{
      document.getElementById('message').innerHTML='Красава, в точку!';
      document.getElementById('trybutton').innerHTML='Новая игра';
      document.getElementById('trybutton').value='Новая игра';
      }
    }
  else if(buttonInner == 'Новая игра'){
    randomNum = parseInt(Math.random() * (10 - 0 + 1) + 0);
    console.log(randomNum);
    document.getElementById('try').value='';
    document.getElementById('trybutton').innerHTML='Попробовать!';
    document.getElementById('message').innerHTML='Начинай!'
    document.getElementById('trybutton').value='Попробовать!';
  }
}
