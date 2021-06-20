function First(){
var name = prompt('Как тебя зовут?');
var birthYear = prompt('Какого ты года рождения?');

var todayTime = new Date().getFullYear();
var yourAge = todayTime - birthYear;

if(yourAge < 18) {
  alert('Привет, малолетка! :DDDD');
}
else if(yourAge >= 18 && yourAge<45) {
  alert('Добрый день, ' + name);
}
else {
  alert('Здравствуйте, великий старец ' + name);
  }
}
