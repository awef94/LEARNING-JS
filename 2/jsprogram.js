var first = null;
var second = null;

function Start() {
/*
Этот блок кода запускает два метода до бесконечности,
пока не получит число (NaN исключается),
после чего на основе полученых данных выдаёт одно из треёх вариантов сообщений.
*/
while (typeof(first) != "number" || isNaN(first) == true) {
  FirstNum();
  }
while (typeof(second) != "number" || isNaN(second) == true) {
  SecondNum();
  }
  if(first > second){
    alert('Топай отсюда, мальчик!!! >:()');
  }
  else if(first < second){
    alert('Проходи! Наркота на центральном столе!');
  }
  else {
    alert('Ай, блять! Не попал! D:')
  }
}


function FirstNum() {
  /*
  Этот блок кода запрашивает возраст доступа от пользователя, парсит в int
  и на основе типа данных выдаёт одно из двух сообщений в консоль.
  */
  first = Number(prompt('Введите возраст доступа:', 'Позови маму!'));

  if(typeof(first) != "number" || isNaN(first) == true){
    console.log('Всё летит в пизду!')
  }
  else {
    console.log('И всё идёт по плану!')
  }
}


function SecondNum() {
  /*
  Этот блок кода запрашивает возраст от пользователя, парсит в int
  и на основе типа данных выдаёт одно из двух сообщений в консоль.
  */
  second = Number(prompt('Введите свой возраст:', 'Не пизди мне тут!'));

  if(typeof(second) != "number" || isNaN(second) == true){
    console.log('Всё летит в пизду!')
  }
  else {
    console.log('И всё идёт по плану!')
  }
}
