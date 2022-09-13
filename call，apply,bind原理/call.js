Function.protorype.myCall = function(thisArgs,...args) {
  let fn = this; //如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上
  thisArgs = thisArgs ? Object(thisArgs) : window;

  thisArgs.fn = fn;
  let result = thisArgs.fn(...args);
  delete thisArgs.fn;
  return result;
}


function foo(a,b) {
  console.log('foo运行了');
  console.log(a + b);
  console.log(this)
}

let obj = {
  name:'zs',
  age:18
}


foo.myCall(obj,1,2,3,4) // 隐式绑定