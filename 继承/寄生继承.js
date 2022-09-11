function createObject(o) {
  function Fn() {};
  Fn.prototype = o;
  return new Fn();
}


function createAnother(orginal) {
  let clone = createAnother(orginal);
  clone.sayHi = function() {
    console.log("sayHi")
  }

  return clone;
}


let person = {
  name:'zs'
}

let obj1 = createAnother(person)