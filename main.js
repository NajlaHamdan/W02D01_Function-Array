//function expression
//we can't use it before declaration as a variable
const greet=function(){
    console.log("Hello");
}
//we can use it before declaration
function greet1(){
    console.log("Hello");
}
//////////////////////////////////
const greet2=function(){
    console.log("Hello");
}

function greet1(){
    return "Hello" ;
}
let x=greet()
let y=greet1()

const stringLength=function(str){
    if(str.length >=7){
        return 'Long word'
    }else if(str.length < 3){
        return 'short word'
    }else{
        return 'med word'
    }
}

const getFirstUpperLitter = function(str){
    for(i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            return str[i];
            i=str.length;//another way to get out of the loop
        }
    }return 'no match'
}
//------------------------Tasks------------------------------
const sum=function(num1,num2){
    return num1+num2;
}
sum(10,5)

const average=function(num1,num2){
    ave=(num1+num2)/2;
    return ave;
}
average(20,5)

const findFactorial=function(num){
    if(num ==0 || num==1){
        return 1;
    }
        return num*findFactorial(num-1);
}
findFactorial(6)

const round=function(number){
    return Math.round(number);
}
round(2,2)

const toThePowerOf=function(base,exponent){
    return Math.pow(base,exponent);
}
round(2,2)

const randomNumber=function(){
    return Math.random()*(1-0)+0;
}
randomNumber()

const oneOrZero=function(){
    return Math.floor(Math.random() * 2);
}

const randomRange=function(number){
    if(number<0){
        return 'please enter positive number';
    }
    return Math.floor(Math.random() * number+1);
}
randomRange(4);

const includeOf = function(string,character){
    for(i=0;i<string.length;i++){
        if(character==string[i]){
            return true;
        }
    }return false;
}
//-----------------Array---------------
const addToArray=function(array,string){
    array.push(string);
    return array;
}

const convertToString=function(array){
    return array.join(" ");
}

const updateValue=function(array,index,value){
        if(index>array.length-1){
            return 'there is no element to updated in this index'
        }
        array.splice(index,1,value);
        return array;
}
const onlyString=function(array){
    strings=[];
    for(i=0;i<array.length;i++){
        if(typeof array[i]==="string"){
            strings.push(array[i])
        }
    }return strings
}

const login=function(username,password){
    const users = [
        ["Jane", "123456" ],
        ["admin", "abc123" ],
      ];
    if(username==users[0][0] && password==users[0][1]){
        return "Login Successful";
    }
    else if(username==users[1][0] && password==users[1][1]){
        return "Login Successful";
    }else{
        return "Login Failed";
    }
}
const maximumNumber=function(numbers){
    max=0;
    for(i=0;i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i]
        }
    }return max;
}
const reversString=function(string){
    let splitstring=string.split("");
    let reverseString=splitstring.reverse()
    return reverseString.join("");
}