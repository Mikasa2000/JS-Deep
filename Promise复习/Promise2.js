function Promise(excutor) {
  let that = this;
  this.promiseState = "pending"
  this.promiseResult = null;
  this.callBacks = [];

  function resolve(value) {
    if (that.promiseState === "pending") {
      queueMicrotask(() => {
        that.promiseState = "fullfilled";
        that.promiseResult = value;
        that.callBacks.forEach(item => {
          item.onResolved(that.promiseResult);
        })
      })
    }
  }

  function reject(reason) {
    if (that.promiseState === "pending") {
      queueMicrotask(() => {
        that.promiseState = "rejected";
        that.promiseResult = reason;
        that.callBacks.forEach(item => {
          item.onRejected(that.promiseResult);
        })
      })

    }
  }


  try {
    excutor(resolve, reject);
  } catch (error) {
    reject(error);
  }


}


Promise.prototype.then = function (onResolved, onRejected) {
  const that = this;
  if(typeof onRejected !== "function") {
    onRejected = reason => {
      throw reason;
    }
  }

  if(typeof onResolved !== "function") {
    onResolved = value => value;
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        let result = type(that.promiseResult);
        if (result instanceof Promise) {
          result.then(v => {
            resolve(v);
          }, r => {
            reject(r);
          })
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    if (this.promiseState === "fullfilled") {
      callback(onResolved)
    }


    if (this.promiseState === "rejected") {
      callback(onRejected)
    }


    if (this.promiseState === "pending") {
      this.callBacks.push({
        onRejected: function () {
          callback(onRejected);
        },
        onResolved: function () {
          callback(onResolved);
        }
      })
    }
  })


}


Promise.prototype.catch = function(onRejected) {
  return this.then(undefined,onRejected)
}







