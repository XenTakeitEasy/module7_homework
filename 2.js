const obj = {
    a: 1,
    b: 2,
    c: 3,
    trueKey: 4,
  };
    
  function func(trueString, trueObject){
    console.log(trueString in trueObject);
  }
  func( "trueKey", obj);