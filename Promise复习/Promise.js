function Promise(excutor) {
  let that = this;
  this.promiseState = "pending";
  this.promiseResult = null;
  this.callBacks = [];


  function resolve(data) {
    if (that.promiseState !== "pending") return;
    that.promiseState = "fullfilled";
    that.promiseResult = data;
    queueMicrotask(() => {
      that.callBacks.forEach(item => {
        item.onResolved1(data);
      })
    })
  }

  function reject(data) {
    if (that.promiseState !== "pending") return;
    that.promiseState = "rejected";
    that.promiseResult = data;
    that.callBacks.forEach(item => {
      item.onRejected1(data);
    })
  }

  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }

}

// then方法
Promise.prototype.then = function (onResolved, onRejected) {
  let that = this;
  return new Promise((resolve, reject) => {
    // 封装函数
    function callback(type) {
      try {
        let result = type(that.promiseResult);
        if (result instanceof Promise) {
          result.then(v => { resolve(v) }, r => { reject(r) });
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    // 1.如果是同步任务，直接在then中调用
    if (this.promiseState === "fullfilled") {
      callback(onResolved);

    }

    if (this.promiseState === "rejected") {
      callback(onRejected)
    }

    // 2.如果是异步任务，保存回调函数
    if (this.promiseState === "pending") {
      // 保存回调函数 
      // debugger
      this.callBacks.push({
       
        onRejected1: function () {
          callback(onRejected)
        },
        onResolved1: function () {
          callback(onResolved)
        }
      })

    }
  })


}

Promise.all = function(params) {
  return new Promise((resolve,reject) => {
    let count = 0;
    let newArr = [];
    for(let i = 0; i < params.length; i++) {
      params[i].then(v => {
        newArr[i] = v;
        count++
        if(count == params.length) resolve(newArr); // 返回一个数组
      },r => {
        reject(r);
      })
    }
  })
}

Promise.resolve = function(value) {
  return new Promise((resolve,reject) => {
    if(value instanceof Promise) {
      value.then(v => {
        resolve(v);
      }, r => {
        reject(r)
      } )
    }else {
      resolve(v);
    }
  })
}

Promise.reject = function(value) {
  return new Promise((resolve,reject) => {
    reject(value);
  })
}

Promise.race = function(params) {
  return new Promise((resolve,reject) => {
    for(let i = 0; i < params.length; i++) {
      params[i].then(v => {
        resolve(v);
      },r => {
        reject(r);
      })
    }
  })
}
