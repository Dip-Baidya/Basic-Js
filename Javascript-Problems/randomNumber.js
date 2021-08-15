var num = 2.5;
var result1 = Math.floor(num);// output : 2
var result2 = Math.ceil(num);// output : 3
var result3 = Math.round(num);//output : 2 (if 2.499999), (if 2.5 then output 3)
var result4 = Math.random();// o theke 1 er moddhe randomly um asbe 

for (var i = 0; i < 10; i++){
    var randomNum = Math.random() * 6;
    var result = Math.round(randomNum);
    console.log(result);
}



