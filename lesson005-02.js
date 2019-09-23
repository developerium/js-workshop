// watch 1:25:00

const fetchDatabase = (num) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve(num * 3);

    }, 3000);
  })
};


fetchDatabase(2)


// fetchDatabase(2)
//   .then(response => {
//
//     console.log('lesson005-01.js:17 ', response);
//
//   })
//   .catch(error => {
//
//   })


const callAsync = async () => {
  try {
    const result = await fetchDatabase(2);
    const result2 = await fetchDatabase(2);
    const result3 = await fetchDatabase(2);

  } catch (e) {

  }

}
