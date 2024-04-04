let newString = '' 

function ReverseString(str){
    for (let i = str.length - 1; i>=0; i--){
        newString += str[i]
    }
    return newString 
}

const Original = 'JavaScript';
const Reversed =  ReverseString(Original)

console.log(`Original String: ${Original}`); 
console.log(`Reversed String: ${Reversed}`); 