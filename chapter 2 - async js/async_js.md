## Sync
* Means in sync - Go from top to bottom, one by one
* You have a global execution context. Suppose you have function myFunc(), then when this func
is called then a new exec context is created which is inside global. JS thread runs inside new exec context to execute the function.

## Async Server
* Fetching Tweets
While waiting for tweets to receive from server, we should be able to continue running next part of the code.

```
function display(data){
  console.log(data)
}

const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

// user can do NOTHING here !
// could be 300ms, could be half a second
// they're just clicking and getting nothing
// Blocking

display(dataFromAPI)

console.log(“Me later!”);
```

setTimeout --> Web browser API feature
We move out this out of JS single thread

setTimeout(printHello, 1000)

Callback queue
printHello will move to callback queue
Event loop will move the func from callback to global stack

Micro Task Queue
This queue is prioritised above the callback the queue

const fetchData = fetch(...);
fetchData.then(displayData)

displayData func is moved to micro task queue (It's a promise callback)
displayData func is moved to micro task queue when promise status is resolved


Whenever any method in the global execution context is done, it's memory is deallocated
and removed from the global execution context

### Promises
  - status : pending | resolved | rejected
  - value
  - onFullfillment

Example - I am a search service, you are a client, that want to search something.
I promise to you, that I'll notify you as soon I complete searching, and then you 
can do something with your search result.

