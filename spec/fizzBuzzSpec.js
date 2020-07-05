describe("My fizzBuzz function", function(){

    describe("Checks if fizzBuzz exists", function(){
        it("should exist", function(){
            expect(fizzBuzz).toBeDefined();
        });
        it("Should return Fizz", function(){
            let result = fizzBuzz(3); 
            expect(result).toBe("Fizz");
        })
        it("Should return 2", function(){
            let result = fizzBuzz(2);
            expect(result).toBe(2);
        });
        it("Should return Buzz", function(){
            let result = fizzBuzz(5);
            expect(result).toBe("Buzz");
        });
        it("Should return Fizzbuzz", function(){
            let result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
    });
});