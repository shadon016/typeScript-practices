const numberArray:number[]=[1,2,3,4,5,6,7]

const stringArray:Array<string>=["one","two"]

const combinedArray:(number|string)[]=[1,"one",2,"two"]

const genComArray:Array<number|string>=[1,"one"]


const multidimAr:number[][]=[[1,2,3,4],[5,6,7,8]]

console.log(multidimAr);

/*Common Array Methods
👉 এগুলো almost সব project এ দরকার হয়:

Method	কাজ
push()	শেষে element যোগ করা
pop()	শেষে থেকে element সরানো
shift()	শুরু থেকে element সরানো
unshift()	শুরুতে element যোগ
map()	প্রতিটি element কে রূপান্তর
filter()	শর্ত অনুযায়ী element রাখা
find()	শর্ত অনুযায়ী প্রথম element খোঁজা
includes()	কোনো মান আছে কিনা যাচাই
forEach()	প্রতিটি element এর উপর কাজ
reduce()	সব element দিয়ে একটা মান বানানো*/


// array with objects

type User={
    name:string,
    age:number
}

const user:User[]=[{name:"jhon",age:36}]

console.log(user);

// array methods same as js