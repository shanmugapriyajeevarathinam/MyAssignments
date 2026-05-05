// Example1 Assignment
function assignString(s){
let a =s.split(" ")
let b = a.length
for(let i =0;i<b;i++){
let c = a.pop(i)
c=c.length
return c;
}
}
console.log(`Input String is "Hello World"`);
console.log(`Length of the last word is ${assignString("Hello World")}`);

//Example 2 Assignment

function assignString(s){
let a =s.trim().split(" ")
let b = a.length
for(let i =0;i<b;i++){
let c = a.pop(i)
c=c.length
return c;
}
}
console.log(`Input String is " fly me to the moon HelloMoon! " `);

console.log(`Length of the last word is ${assignString(" fly me to the moon HelloMoon! ")}`);
 
// Example 3 Assignment

function  isAnagram(word1,word2){

    let a= word1.trim().split('').sort().join()
    console.log(a);
   
    let b =word2.trim().split('').sort().join()
    console.log(b);
    return a===b

}
console.log(isAnagram('listen', 'silent'));

console.log(isAnagram('hello', 'world'));









