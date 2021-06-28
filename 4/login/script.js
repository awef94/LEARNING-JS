let users = [
  {
    name: 'Алексей',
    login: 'alex',
    pass: '12345'
  },
  {
    name:'Альбина',
    login:'ygondoshy',
    pass:'qwerty'
  },
  {
    name:'Глеб',
    login:'bread2806',
    pass:'zxcvb'
  },
  {
    name:'Денис',
    login:'dan',
    pass:'asdfg'
  }
];

function Work() {
  document.getElementById('button').innerHTML === 'Войти' ? CheckData() : LeaveAccount();
}

function CheckData() {
  let loginFunc = document.getElementById('login');
  let passFunc = document.getElementById('pass');
  let mainText = document.getElementById('maintext');
  let button = document.getElementById('button');
  let bottomText = document.getElementById('bottomtext');
  let loginh = document.getElementById('loginh');
  let passh = document.getElementById('passh');
  let nameh = document.getElementById('nameh');
  let alert = document.getElementById('alert');

  for(let i = 0; i < users.length; i++){
    if(users[i].login === loginFunc.value && users[i].pass === passFunc.value){
      mainText.innerHTML='Страница аккаунта';
      bottomText.innerHTML='Ваши данные аккаунта';
      button.innerHTML='Выйти из аккаунта';
      loginh.innerHTML=users[i].login + ' <-- Ваш логин';
      nameh.innerHTML=users[i].name + ' <-- Ваше имя';
      passh.innerHTML=users[i].pass + ' <-- Ваш пароль';
      loginh.style.display='block';
      nameh.style.display='block';
      passh.style.display='block';
      loginFunc.style.display='none';
      passFunc.style.display='none';
      alert.style.display='none';

      console.log('Успех!');
      break;
    }
    else{
      alert.style.display='block';
      console.log('Жопа!');
    }
  }
}

function LeaveAccount() {
  let loginFunc = document.getElementById('login');
  let passFunc = document.getElementById('pass');
  let mainText = document.getElementById('maintext');
  let button = document.getElementById('button');
  let bottomText = document.getElementById('bottomtext');
  let loginh = document.getElementById('loginh');
  let passh = document.getElementById('passh');
  let nameh = document.getElementById('nameh');
  let alert = document.getElementById('alert');

  mainText.innerHTML='Страница входа';
  bottomText.innerHTML='Введите ваши данные';
  button.innerHTML='Войти';
  loginh.style.display='none';
  nameh.style.display='none';
  passh.style.display='none';
  loginFunc.style.display='block';
  passFunc.style.display='block';
  loginFunc.value='';
  passFunc.value='';
  alert.style.display='none';
}
