function Start(){
let firstName = null;
let lastName = null;
let age = null;

let firstInput = document.getElementById('fn');
let lastInput = document.getElementById('ln');
let inputAge = document.getElementById('age');

if(firstInput.value == ''){
firstName = 'Тупой';
}
else{
  firstName = firstInput.value;
}
if(lastInput.value == ''){
  lastName = 'Хуй';
}
else{
  lastName = lastInput.value;
}
if(inputAge.value == ''){
  age = 3000;
}
else{
  age = inputAge.value;
}

alert('Привет! Меня зовут ' + firstName + ' ' + lastName + ' и мне ' + age + ' лет!');
}
