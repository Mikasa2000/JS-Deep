Function.prototype.myApply = function(thisArgs,argsArr) {
  let fn = this;
  thisArgs = thisArgs ? Object(thisArgs) : window;

  thisArgs.fn = fn;
  argsArr = argsArr ? argsArr : [];
  let result = thisArgs.fn(...argsArr);
  delete thisArgs.fn;
  return result;

}


function foo() {
  console.log('foo执行了');
}


let obj = {
  name:'zs'
}

foo.myApply(obj,[1,2,3,4]);