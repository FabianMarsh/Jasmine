fizzBuzz = new function(){
    for(var i = 0; i < 100; i++){
        if(i % 3 === 0&& i % 5 === 0){
            return "FizzBuzz";
        } else if (i % 3 === 0){
            return "Fizz";
        } else {
            return "Buzz";
        }
    }
}