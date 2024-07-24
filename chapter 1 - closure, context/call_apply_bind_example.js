// bind example
const mainObj = {
  movie: "Happiness",
  city: "Mumbai",
}

const obj = {
  movie: "Hero",
  city: "Delhi",
  print: function() {
    return this.movie + " " + this.city
  }
}

const f = obj.print.bind(mainObj) // change the context
console.log(f())

// call example

const f2 = obj.print
console.log(f2.call(mainObj))

// apply example
