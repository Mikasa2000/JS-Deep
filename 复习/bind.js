Function.prototype.myBind = function(thisArgs,...thisAgs) {
  let fn = this;
  thisArgs = thisArgs ? Object(thisArgs) : window;
  function proxyFn(...ags) {
    let finalArr = [...thisAgs,...ags]
    thisArgs.fn = fn;
    let result = thisArgs.fn(...finalArr);
    delete thisArgs.fn;
    return result;
  }
  return proxyFn;
  
}


function foo(a, b) {
  console.log("我运行了");
  console.log(a + b);
}


let obj = {
  name:"zs"
}


let res = foo.myBind(obj,1,3);
res()