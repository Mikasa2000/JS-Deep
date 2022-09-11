// obj2.__proto__ = obj1.protorype
let obj1 = {
  name:'zs',
  age:18
}

// 设置一个工厂函数
function createObject(o) {
  function Fn(){};
  Fn.prototype = o;
  let newObj = new Fn();
  return newObj;
}



let obj2 = createObject(obj1);
