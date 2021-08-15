 var number = [1, 2, 3, 4, 8, 1, 5, 2, 35, 5, 6];
 var uniqueNumber = [];

 for(i = 0; i < number.length; i++){
     var element = number[i];
     var index = uniqueNumber.indexOf(element);
     if (index == -1) {
         uniquenumber.push(element);
     }
 }


 console.log(uniquenumber)

