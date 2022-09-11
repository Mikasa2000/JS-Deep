Function.protorype.myCall = function(thisArgs,...args) {
  let fn = this;
  thisArgs = thisArgs ? Object(thisArgs) : window;

  thisArgs.fn = fn;
  let result = thisArgs.fn(...args);
  delete thisArgs.fn;
  return result;
}


function foo(a,b) {
  console.log('foo运行了');
  console.log(a + b)
}

let obj = {
  name:'zs',
  age:18
}


foo.myCall(obj,1,2,3,4)