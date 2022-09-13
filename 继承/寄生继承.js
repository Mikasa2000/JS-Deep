let person = {
  name:'zs'
}

function createObject(o) {
  function Fn() {};
  Fn.prototype = o;
  return new Fn();
}


function createAnother(name,age) {
  let clone = createObject(person);
  clone.name = name;
  clone.age = age;
  clone.sayHi = function() {
    console.log("sayHi")
  }

  return clone;
}




let obj1 = createAnother(person)