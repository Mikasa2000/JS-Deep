function Ajax(url) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(url)
    },2000)
  })
}

function *generate() {
  let res1 = yield Ajax('https://www.baidu.com');
  let res2 = yield Ajax(res1 + "1111");
  let res3 = yield Ajax(res2 + "2222");
  console.log(res3)
}


function co(generate) {
  let getData = generate();
  // 递归
  function exec(res) {
    let result = getData.next(res); //{value:xxx,done:false/true}
    if(result.done) return result.value;
    result.value.then((value) => {
      exec(value);
    })
  }

  exec()
}

co(generate)
