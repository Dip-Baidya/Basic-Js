function reverseString(str){
    var reverse = "";
    for (i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var speech = "I am a good Person. i dont snore at night";
var forAlien = reverseString(speech);
console.log(forAlien);