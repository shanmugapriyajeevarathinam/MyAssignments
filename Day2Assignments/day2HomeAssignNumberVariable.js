function numberTypeCheck(inputValue){
let ouputNumberType;
if (inputValue > 0){
    ouputNumberType = inputValue + " " + "is positive number";
    console.log(ouputNumberType);   
}
else if (inputValue < 0){
     ouputNumberType = inputValue + " " + "is negative number";  
     console.log(ouputNumberType);   
}
else{
    ouputNumberType = inputValue + " " + "is neutral" ;
    console.log(ouputNumberType); 
}
}
numberTypeCheck(90);

numberTypeCheck(0);

numberTypeCheck(-25);