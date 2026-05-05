// Task 1 Starts here
function userProfile(name){ // Task1
console.log(`hello!\ ${name}`);
}
 userProfile("Shanmugapriya")  

 // Task 2 starts here
 let n =6; // Task2
 let double = (num)=>num*num ;
 console.log(double(n));

 // Task 3 Method 1 starts here
 
let setTimeout1 = function(){// Task3 (First method)
    console.log("This message is delayed by 2 seconds");
    
}
setTimeout1()

// Task 3 Method 2 Starts here

setTimeout(function(){// Task3(second method)
    console.log("This message is delayed by 2 seconds");
}, 2000)

// Task 4 Start here
    
function getUserData(x){

    setTimeout(function(){// Task3(second method)
    x();
    },3000
)

}

function callback(){
    console.log("Call Back Function");
    
}

getUserData(callback)

