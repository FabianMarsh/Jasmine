describe("My whatCanIDrink function", function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    });


    describe("Checks age", function(){
        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });

        it("Should return 'Drink Toddy' when call as whatCanIDrink(13)", function(){
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("Should return 'Drink Coke' when call as whatCanIDrink(14)", function(){
            var result = whatCanIDrink(14)
            expect(result).toBe("Drink Coke");
        });

        it("Should return 'Drink Beer' when call as whatCanIDrink(20)", function(){
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("Should return 'Drink Whiskey' when call as whatCanIDrink(65)", function(){
            var result = whatCanIDrink(65)
            expect(result).toBe("Drink Whiskey");
        });
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!' when call as whatCanIDrink('Hello Barkeep I am 21')", function(){
            var result = whatCanIDrink("Hello Barkeep I am 21")
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});
