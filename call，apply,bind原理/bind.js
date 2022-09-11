Function.prototype.myBind = function(thisArgs,argsArr) {
  let fn = this;
  thisArgs = thisArgs ? Object(thisArgs) : window;

  function proxyFn(...args) {
    thisArgs.fn = fn;
    let finalArr = [...argsArr,...args];
    let result = thisArgs.fn(...finalArr);
    delete thisArgs.fn;
    return result;
  }

  return proxyFn;
}




function foo() {
  console.log("foo被调用了");
}


let obj = {
  name:'zs'
}


let bar = foo.myBind(obj,1,2,3,4);
bar();
