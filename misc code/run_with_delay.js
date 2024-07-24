const arr = [1, 2, 3, 4, 5]
let counter = 4

function printWithDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(arr[counter])
      counter = counter - 1
      resolve(counter)
    }, delay)
  })
}

let pro = printWithDelay(1000)
// for (let i=1; i< arr.length; i++) {
//   pro.then(() => printWithDelay(1000*i))
// }


pro.then(() => printWithDelay(1000))
.then(() => printWithDelay(1000))
.then(() => printWithDelay(1000))
.then(() => printWithDelay(1000))

// https://javascript.info/promise-basics