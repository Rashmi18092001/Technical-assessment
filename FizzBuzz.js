function FizzBuzz(){

    for (let i = 0; i <=100; i++){

        // if number is multiple of 3 and 5 print FizzBuzz
        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz');
        }

        //if number is multiple of 3 print Fizz 
        else if(i % 3 == 0){
            console.log('Fizz');
        }

        // if number is multiple of 5 print Buzz
        else if(i % 5 == 0){
            console.log('Buzz');
        }

        else{
            console.log(i);
        }
    }
}

FizzBuzz() 