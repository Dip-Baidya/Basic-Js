function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var fullFailly = [255, 36,24];
var member1 = inchToFeet(fullFailly[1]);

var joy = inchToFeet(255);

console.log("Joy Height in feet:", joy);

console.log("First Member Height in Feet: ", member1);