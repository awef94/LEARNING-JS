//let anotherCar = new Object();

let car = {
  mark: 'lada',
  model: 'vesta',
  body: 'sedan',
  color: 'lime',
  drive: 'front',
  motor: 'line 4',
  year: 2012,
  price: undefined,
  getInfo: function() {
    return this.mark + ' ' + this.model + ' ' + this.year;
  }
};

let car2 = {
  mark: 'ford',
  model: 'focus',
  body: 'hatchback',
  color: 'blue',
  drive: 'front',
  motor: 'line 4 turbo',
  year: 2019,
  price: 2700000,
  getInfo: function() {
    return this.mark + ' ' + this.model + ' ' + this.year;
  }
}

let car10 = {
  mark: 'chevrolet',
  model: 'corvete',
  year: 1986
}

let car20 = {
  
}

function printObjects(obj) {
    for (let prop in obj){
      if(obj.hasOwnProperty(prop)){
        let propsValue = obj[prop];
        console.log(prop + ' : ' + propsValue);
      }
    }
  }

function copyObjects(obj1, obj2) {
  for (let prop in obj1){
    obj2[prop] = obj1[prop];
  }
}

printObjects(car2);
console.log('');
printObjects(car);
