function whatCanIDrink(){
    if(number < 0){
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    } else if (number < 14){
        return("Drink Toddy");
    } else if (number < 18){
        return("Drink Coke");
    } else if (number < 21){
        return("Drink Beer");
    } else if (number < 130){
        return("Drink Whisky");
    } else if (typeOf(number) != Number){
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}