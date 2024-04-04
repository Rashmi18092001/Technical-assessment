let newString = '' //varible to store reversed string, initially declared empty

// function to reverse a string
// str is a string to be reversed
function ReverseString(str){
    for (let i = str.length - 1; i>=0; i--){
        newString += str[i]
    }
    return newString //after concatenating each letter the reversed string is returned using return keyword
}

const Original = 'JavaScript';
const Reversed =  ReverseString(Original)

console.log(`Original String: ${Original}`); 
console.log(`Reversed String: ${Reversed}`); 