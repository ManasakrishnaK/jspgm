// creating the elements with javaScript
/* 
const divTag = document.createElement("div");
const hTag = document.createElement("h2");
const text = document.createTextNode("Hello world");

hTag.appendChild(text);
divTag.appendChild(hTag)

const root = document.getElementById("root");
root.appendChild(divTag) */



// creating class and inheriting classes

/* class User{
    constructor(name, email){
        console.log(this)
        this.name = name;
        this.email = email;
        
    }
    static countUsers(){
        console.log(`there are 50 users`)
    }
    register(){
        console.log(`${this.name} is now registerd`)
    }

}

class Member extends User{
    constructor(name,email, memeberpackage){
        super(name, email);
        this.package = memeberpackage;
    }
    tour(){
        console.log(`${this.name} with ${this.package}`)
    }
}



var mike = new Member('mike','mike@gmail.com', 'delux');
mike.tour();
mike.register();

 */

/* Array.prototype.mypush = function(...args){
    console.log(...args)
    let arr = this;
    let arg = args.slice();
    console.log(args)

    for(i = 0; i< args.length; i++){
        arr[arr.length] = args[i]
    }
     console.log(arr);
     return arr.length

    
}

const array1  = ["apple", "banana"]
array1.mypush("mango", "peach"); */
/* 
let obj = {username : 'manasa', age:30}
try{
    console.log('checking')
    if(!obj.email) throw new Error('no data')

}catch(error){
    console.log(error.message)
}
 */
// remove duplication of strings


/* function removeDuplicates(arr){
    var newarr = [];
    newarr.push(arr[0]);
    for(var i = 1; i< arr.length; i++){
        var flag = 0
        for(var j= 0; j<i; j++){
            if(arr[i]===arr[j]){
                flag = flag + 1;
                break;
            }
        }
        if(flag === 0){
            newarr.push(arr[i])
        }
    }
   
        return newarr;
    
}
console.log(removeDuplicates(['a','b','c','d','a','b','e','f']))


 */

/* const displayMessage = (msg)=>{
    return new Promise((resolve, reject)=>{
        if(msg === "there"){
            reject("failed")
        }
        else{
            resolve(`${msg} is succes`)
        }
    })
}
let cbfunc = async()=>{
    let result ="";
    try{
    result = await displayMessage("hello");
    console.log(result)
     result = await displayMessage("therecvv");
    console.log(result)
    
    result = await displayMessage("helwassuplo");
    console.log(result)
    }catch(error){
        console.log(error)
    }
}

cbfunc()


localStorage.setItem('keyvalue','abc'); */

/* 
let arr = [1,2,3];
let arr2 = [...arr, 4,5];
let arr3 = [4,5,...arr];

console.log(`arr is ${arr}`)
console.log(`arr2 is ${arr2}`)
console.log(`arr3 is ${arr3}`)
 */

// Palindrome

/* function palindrome(str){
    var str1 = str.toLowerCase();
    var arr = str1.split("");
    var flag = 0;
    for(var i = 0; i<arr.length; i++){
        if((arr[i]) !== arr[arr.length - i -1]){
            flag = flag +1;
            break;
        }
    }
    if(flag === 0) console.log(`the given word ${str} is palindrome`);
    else console.log(`Not a palindrome`)
        

}

palindrome("aaaa") */


// print prime Numbers upto 20
/* 
function prime(n){
    var newarr = [];
    for(var i  = 2; i<=n; i++){
        var flag = 0;
        for(var j = 2; j<i; j++){
            if(i%j === 0){
                flag = flag +1;
                break;
            }
        }
        if(flag === 0){
            newarr.push(i)
        }
    }
    return newarr
}
console.log(prime(20)) */

// avoid duplication of strings

/* function no_duplicate_strings(arr) {
    var newarr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        var flag = 0;
        for (var j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                flag = flag + 1;
                if (flag === 2) {
                    break;
                }
            }
        }
        if (flag === 0 || flag === 1) {
            newarr.push(arr[i])
        }
    }
    return newarr

}
console.log(no_duplicate_strings(['a', 'b', 'a', 'c', 'a', 'd', 'b', 'c', 'c', 'e'])) */

/* const divTag = document.createElement("div");
const pTag = document.createElement("p");
const textContent = document.createTextNode("Hello from Js");

pTag.appendChild(textContent);
divTag.appendChild(pTag);

const root  = document.getElementById("app");
root.appendChild(divTag) */

/* document.getElementById("ancesstor").addEventListener('click',
 function(){
     alert("Ancesstor is clicked")
    })

    document.getElementById("parent").addEventListener('click',
 function(){
     alert("parent is clicked")
    })

    document.getElementById("child").addEventListener('click',
 function(){
     alert("child is clicked")
    })
*/
/* 
          const divTag = document.createElement("div")
          const pTag = document.createElement("p")
          const text = document.createTextNode("text to paragraph")
          pTag.appendChild(text);
          divTag.appendChild(pTag)
          const root = document.getElementById("root")
          root.appendChild(divTag) */

/*        function x(){
          var a = 200;
          function y(){
              console.log('a is', a, c)
          }
          return y
      }

      var z  = x();
      console.log(z);
      z(); 
      */
/*  var c = 300;
const x = ()=>{
     var b = 200;
     const y = ()=>{
         console.log('b and c are', b, c)
     }
     return y
 }

 var z  = x();
 console.log(z);
 z(); 
 
*/
/* var counter  = 0

const getData = ()=>{
console.log("getting Data", counter++)
}
const dosomeThing = (fn, delay)=>{
   let timer;
   
   return function xyz(){
       console.log('timer is',timer)
       clearTimeout(timer);
       timer  = setTimeout(()=>{
           fn.apply()
       }, delay)
       
   }

*/
/* 
    let multiply  = (a,b,c)=> a*b*c;

    let multiplyOne  = multiply.bind({}, 2);
    console.log( multiplyOne)
    let multiplyTwo  = multiplyOne.bind({}, 3);
    console.log( multiplyTwo)
    let multiplyThree  = multiplyTwo.bind({}, 5);
    console.log( multiplyThree);
    console.log(multiplyThree()) */

/* let count  = 0;
const incrementCount  = ()=>{
 
    console.log(count++)
}

const incrementFive =()=>{
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();

}
incrementFive(); */
/* 
let obj  = {name:"Akshay", age:30, city:"Dehradun"};

let obj2 = {name:"Sachin"}
obj2.__proto__ = obj
console.log(obj2.name)
console.log('city is ', obj2.city)
     */



/* let obj = {name:"manasa", age:30};
console.log(obj.nickName);

function vowelsAndConsonants(str){
   let arr = str.split("");
   
   console.log(arr);
   let vowels = ["a","e","i","o","u"]
   let newar = []
   let vowelsFound = []; let consonantsFound= [];
   for(var i = 0; i<arr.length; i++){
   if(vowels.includes(arr[i])){
      vowelsFound.push(arr[i])
     }
     else{
         consonantsFound.push(arr[i])
     }
    }
     newar = [...vowelsFound, ...consonantsFound]
     console.log('newar is', newar)
     console.log(vowelsFound.join('\n') + '\n' + consonantsFound.join('\n'))

}

vowelsAndConsonants("javascriptloops") */

/* "use strict"
function sum(a,b){
    var add = a + 20;
   console.log(add)
}

sum(10,5) */




/* var sum = 0;
function addNumbers(array){
var sum = 0
for(var i = 0; i<array.length; i++){
    if(array[i].length === undefined){
    sum = sum + array[i];
    }
    console.log('sum is',sum)
  if(array[i].length > 0){
    for(j = 0; j<array[i].length; j++){
        sum= sum + array[j]
    }
  }
}
return sum
}
console.log(addNumbers([1,[2,[3]],[[[4,[5]]]]]))


array =  [{firstName:'kailash', lastName:'kaushik'}, {firstName:'lalit', lastName:'agarwal'},{firstName:'ajay', lastName:'nagar'}];
let arr = [];
function sort(){
for(var i = 0; i< array.length; i++){

   arr.push(array[i].firstName);
   console.log(arr.sort());
}


    
}
sort()



 */

// 1. Write a function for this - multiply(x)(y)(z) which outputs x*y*z ? (Hint- Currying a function)


/* const multiply = (a)=>(b)=>(c)=>a*b*c

console.log(multiply(2)(2)(2))

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func(); 

console.log("outer func:  this.foo = " + bar);
console.log("outer func:  self.foo = " + bar);
console.log("inner func:  this.foo = " + bar);
console.log("inner func:  self.foo = " + bar);

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

      "outerArg = " + 123 + "\n" +
        "innerArg = " + 456 + "\n" +
        "outerVar = " + a + "\n" +
        "innerVar = " + b + "\n" +
        "globalVar = " + xyz;


        (function () {

            try {
                throw new Error();
            } catch (x) {
                var x = 1;
                let y = 2;
                console.log(x); // 1
            }
            console.log(x); // 1 
            console.log(y); as let is a blockscope you cannot access it here; 
        })();
         

// Example of find()

let ar = ["a", "b","c","d"]
console.log(ar.find(a))
 */


/* 
//Example  MAP()
let arr1 = ["apple","banana", "mango"]
    let armap =[]
armap = arr1.map((el, index)=>{
    console.log(el);
    return el; 
});
console.log(armap)


// Example of filter()
let arrfilter = [1,2,3,4,5,6];

let arfilter = arrfilter.filter((el,index)=>el%2===0);
console.log(arfilter)
 */

//reverse each word in sentence 
/* function revstr(string){
var string = "Welcome to this Javascript Guide!";
let arstr = string.split(" ")
let reversear = []
for(var i = 0; i< reversear.length; i++){

}
reversear.join(" ")
}
revstr("Welcome to this Javascript Guide!") */


/* var str = "Welcome to this Javascript Guide!";
var arr = str.split(" ");
var arr2 = []

for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > 0) {
        var strar = arr[i].split("")
        var left = 0;
        var right = strar.length - 1;
        console.log(right)
        
        while (left <= right) {
            var temp = ""
            temp = strar[left];
            strar[left] = strar[right];
            strar[right] = temp

            left++;
            right--;
            }
        console.log(strar)
        console.log(strar.join(""));


       
    }
    arr2.push(strar.join(""))
}

console.log(arr2)
 */
/*  */

/* var objs = [
    { first_nom: 'Lazslo', last_nom: 'Jamf' },
    { first_nom: 'Pig', last_nom: 'Bodine' },
    { first_nom: 'Pirate', last_nom: 'Prentice' }
];

function compare(a, b) {
    if (a.last_nom < b.last_nom) {
        return -1;
    }
    if (a.last_nom > b.last_nom) {
        return 1;
    }
    return 0;
}

console.log(objs.sort(compare));
 */
Array.isArray()

/* let arr = [1, [2, 3], [4, 5, 6]];
var sum = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length == undefined) {
        sum = sum + arr[i]
    } else if (arr[i].length > 0) {
        let nestedarr = arr[i];
        for (var j = 0; j < nestedarr.length; j++) {
            sum = sum + nestedarr[j]
        }
    }

}
console.log(sum) */
let sum = 0;
function arraySum(arr){
    console.log('received arr ', arr)
    for(var  i = 0; i<arr.length; i++){
        if(arr[i].length == undefined){
            sum  = sum + arr[i]
        }else if(arr[i].length > 0){
            arraySum(arr[i])
        }
    }
    return sum

}
console.log(arraySum([1, [2,[3]], [[[4,[5]]]]]))
















