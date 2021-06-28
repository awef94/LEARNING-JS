let randomNum = Math.round(Math.random() * 10);
let counter = 0;
console.log(randomNum);

function Game(){
  let buttonInner = document.getElementById('trybutton').innerHTML;
  let guessNum = document.getElementById('try').value;
  let winMessage = document.getElementById('message').innerHTML;

if(buttonInner == 'Попробовать!'){
  if(guessNum > randomNum && guessNum != ''){
      document.getElementById('message').innerHTML='Меньше бери, лошара!';
      document.getElementById('try').value='';
      counter++;
      document.getElementById('counter').innerHTML=`Попыток: ${counter}`;
    }
  else if(guessNum < randomNum && guessNum != ''){
      document.getElementById('message').innerHTML='Больше бери, даун!';
      document.getElementById('try').value='';
      counter++;
      document.getElementById('counter').innerHTML=`Попыток: ${counter}`;
    }
  else if(guessNum == ''){
    document.getElementById('message').innerHTML='Введи число, дебич!';
    counter++;
    document.getElementById('counter').innerHTML=`Попыток: ${counter}`;
  }
  else{
      document.getElementById('message').innerHTML='Красава, в точку!';
      document.getElementById('trybutton').innerHTML='Новая игра';
      counter++;
      document.getElementById('counter').innerHTML=`Попыток: ${counter}`;
      }
    }
  else if(buttonInner == 'Новая игра'){
    randomNum = parseInt(Math.random() * (10 - 0 + 1) + 0);
    console.log(randomNum);
    document.getElementById('try').value='';
    document.getElementById('trybutton').innerHTML='Попробовать!';
    document.getElementById('message').innerHTML='Начинай!'
    counter = 0;
    document.getElementById('counter').innerHTML=`Попыток: ${counter}`;
  }
}
