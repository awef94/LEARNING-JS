var first = null;
var second = null;
var first2 = null;
var second2 = null;

function Start() {

while (first2 != "number" || first == NaN) {
  FirstNum();
  }
while (second2 != "number" || second == NaN) {
  SecondNum();
  }

  if(first > second){
    alert('Сасай, ты не у дел :D');
  }
  else if(first < second){
    alert('Красавчик! Бухло и шлюхи твои!');
  }
  else {
    alert('Ай, блять! Не попал! >:(')
  }
}

function FirstNum() {
  first = parseInt(prompt('Введите возраст доступа:'));
  first2 = typeof first;
}
function SecondNum() {
  second = parseInt(prompt('Введите свой возраст'));
  second2 = typeof second;
}
