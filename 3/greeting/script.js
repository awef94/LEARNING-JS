function Start(){

let firstInput = document.getElementById('fn').value;
let lastInput = document.getElementById('ln').value;
let inputAge = document.getElementById('age').value;

if(firstInput == ''){
firstInput = 'Тупой';
}
else{
}
if(lastInput == ''){
  lastName = 'Хуй';
}
else{
}
if(inputAge.value == ''){
  inputAge = 3000;
}
else{
}

alert('Привет! Меня зовут ' + firstInput + ' ' + lastInput + ' и мне ' + inputAge + ' лет!');
}
