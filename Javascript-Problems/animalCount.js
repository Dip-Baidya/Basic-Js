function animalCount(depth) {
    var animal = 0;
    if (depth <=10) {
        animal = depth * 50;
    } else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaning = depth - 10;
        var secondPart = remaning * 100;
        animal = firstPart + secondPart;
    }else{
        var firstPart = 10 * 50;
        var secondPart = 20 * 100;
        var remaining = depth - 20;
        var thirdPart = remaning * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var count = animalCount(20);
console.log(count);]
