//sample:vanilla,vanilla,vanilla,strawberry,coffee,coffee//
//and store in userInputString//

const userInputString = prompt(
    "what flavor of froyo would you like to order?"
);
console.log(userInputString);


// convert input from string to array//
const userInputArray = userInputString.split(",");
console.log(userInputArray);
console.log("is array: " + Array.isArray(userInputArray));


//build a function to convert any array to object//
function arrToObj(anyArray) {
    const targetObj = {};
    for (let i = 0; i < anyArray.length; i++) {
        const currentItem = anyArray[i];
        targetObj[currentItem] = (targetObj[currentItem] || 0) + 1; 
}
return targetObj;
};

//call the function with an input//
console.log(arrToObj(userInputArray));

