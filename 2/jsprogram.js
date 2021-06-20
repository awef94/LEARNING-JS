var first = null;
var second = null;
var first2 = null;
var second2 = null;
var first3 = null;
var second3 = null;

function Start() {

while (first2 != "number" || first3 == true) {
  FirstNum();
  }
while (second2 != "number" || second3 == true) {
  SecondNum();
  }

  if(first > second){
    alert('Сасай, ты не у дел');
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
  first3 = isNaN(first);
  if(first2 != "number" || first3 == true){
    console.log('Всё катится в пизду!')
  }
  else {
    console.log('И всё идёт по плану!')
  }
}
function SecondNum() {
  second = parseInt(prompt('Введите свой возраст'));
  second2 = typeof second;
  second3 = isNaN(second);
  if(second2 != "number" || second3 == true){
    console.log('Всё катится в пизду!')
  }
  else {
    console.log('И всё идёт по плану!')
  }
}
