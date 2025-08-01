console.log("Hello World");

//String has quotes/Number has no quotes
let myTest = "123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log(" eggs" + 10 +8);

//Both conditions need to be true
console.log(7>3)&&(5>6);

//only ond condition must be true
console.log(10>3)||(10>12);

//logical not
console.log(!5>3);

function introduction(name,age){
    console.log("Hello,my name is ") + name + " and i am " + age + " years old.";
}

introduction ("Viviana",15);

const hour =new Date().getHours();
let greeting="";

if(hour<12){ 
    greeting="Good Morning";
}else if (hour<18){
    greeting="Good Afternoon";
}else{
    greeting="Good Evening";
}

document.getElementById("greeting").innerText =greeting;
