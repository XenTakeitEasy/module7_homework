obj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  }
  function func(obj){
    for (let key in obj){
      if(obj.hasOwnProperty(key)){
        console.log(key, obj[key]);
      }
      
    }
  }
  func(obj);