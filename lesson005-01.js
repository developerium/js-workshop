const veryLongOperation = (num, callback) => {

  setTimeout(() => {

    callback(num * 3);

  }, 3000);
}


veryLongOperation(3, (result) => {
  veryLongOperation(result, result2 => {
    veryLongOperation(result2, result3 => {



    })
  })
})


console.log('end');
