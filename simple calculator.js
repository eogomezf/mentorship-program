function rainAmount(mm){
    if (mm < 40) {
         let amount = 40 - mm;
         return "You need to give your plant " + amount + "mm of water";
    }else {
         return "Your plant has had more than enough water for today!";
    };
}