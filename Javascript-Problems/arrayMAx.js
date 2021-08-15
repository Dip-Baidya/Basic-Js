 var marks = [45, 55, 66, 77, 88, 99, 35, 22];
 var max = marks[0];

 for (var i = 0; i < marks.length; i++)
 {
     var element = marks[i];
     if (element > max){
         max = element;
     }
 }
 console.log("Highest Value in a Array is: ", max);