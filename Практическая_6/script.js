<<<<<<< HEAD
const array = [{
        name: 'Lena',
        lastname: 'Zvereva',
        fullname: function () {
            return `${this.name} ${this.lastname}`
        }
    },
    {
        name: 'Denis',
        lastname: 'Rabov',
        fullname: function () {
            return `${this.name} ${this.lastname}`
        }
    },
    {
        name: 'Item',
        lastname: 'Item2',
        fullname: function () {
            return `${this.name} ${this.lastname}`
        }
    }
]

const funName = (arr) => {
    const newObj = {};
    let method;

    for (let i = 0, count = arr.length; i < count; i++) {
        newObj[i] = arr[i];
        for (key in arr[i]) {
            if (typeof (arr[i][key]) === "function" && method === undefined) {
                const fun = arr[i][key];
                method = fun.bind(arr[i]);
            }
        }
    }
    if (method !== undefined) {
        ((a) => console.log(a()))(method);
    }
    return newObj;
}

funName(array);
=======
const array = [
  {
    name: 'Lena',
    lastname: 'Zvereva',
    fullname: function(){
      return `${this.name} ${this.lastname}`
    }
  },
  {
    name: 'Denis',
    lastname: 'Rabov',
    fullname: function(){
      return `${this.name} ${this.lastname}`
    }
  },
  {
    name: 'Item',
    lastname: 'Item2',
    fullname: function(){
      return `${this.name} ${this.lastname}`
    }
  }
]


const functionName = (arr) => {
  const newObject = {};
  let method;

  for(let i = 0, count = arr.length; i < count; i++){
    newObject[i] = arr[i];

    for(key in arr[i]){

      if(typeof(arr[i][key]) === 'function'){
        if(method === undefined) { 
          const f = arr[i][key];
          method = f.bind(arr[i]);
        }
      }
      
    }

  }

  if(method != undefined){
    ((a) => console.log(a()))(method)
  }

  return newObject;
}

functionName(array);
>>>>>>> b1b2b9cf01c99a99c10ae17cf0cbc8362336d020
