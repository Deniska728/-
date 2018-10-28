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


const functionName = (arr, callback) => {
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
    callback(method)
  }

  return newObject;
}


console.log( functionName(array, function(func){
  console.log(func())
}) );

functionName(array, function(func){
  console.log(func())
})
