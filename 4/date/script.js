function ChangeDate() {
  let date = new Date();
  let day = null;
    switch(date.getDay()){
      case 0 :
      day = 'ВСК';
      break;
      case 1 :
      day = 'ПОН';
      break;
      case 2 :
      day = 'ВТ';
      break;
      case 3 :
      day = 'СРЕД';
      break;
      case 4 :
      day = 'ЧТ';
      break;
      case 5 :
      day = 'ПЯТ';
      break;
      case 6 :
      day = 'СУБ';
      break;
  }
  let month = null;
  switch(date.getMonth()){
    case 0 :
    month = 'января';
    break;
    case 1 :
    month = 'февраля';
    break;
    case 2 :
    month = 'марта';
    break;
    case 3 :
    month = 'апреля';
    break;
    case 4 :
    month = 'мая';
    break;
    case 5 :
    month = 'июня';
    break;
    case 6 :
    month = 'июля';
    break;
    case 7 :
    month = 'августа';
    break;
    case 8 :
    month = 'сентября';
    break;
    case 9 :
    month = 'октября';
    break;
    case 10 :
    month = 'ноября';
    break;
    case 11 :
    month = 'декабря';
    break;
  }
document.getElementById('stringdate').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${day} ${date.getDate()}.${month}.${date.getFullYear()}`;
}
setInterval(ChangeDate, 1000);
