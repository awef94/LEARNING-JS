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
  age = 3000;
}
else{
}

alert('Привет! Меня зовут ' + firstName + ' ' + lastName + ' и мне ' + age + ' лет!');
}
