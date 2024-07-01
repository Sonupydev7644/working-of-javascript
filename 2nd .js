console.log(MultiplyNumbers(3,4)); // ReferanceError : Cannot access MultiplyNumbers before initialization
const MultiplyNumbers = function(num1,num2){
    return num1 * num2;
};