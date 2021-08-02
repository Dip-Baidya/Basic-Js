var student1 = {id:01, phone:1919, name:"Dip"};
var student2 = {id:02, phone:1717,  name: "Joy"};

var phoneNumber = "phone";
var phone1 = student1.phone;
var phone2 = student2["phone"];
var phone3 = student2[phoneNumber];
// update phone

student2.phone = 12345;
student1["phone"] = 564;
student2[phoneNumber] = 789521

console.log(student2);
console.log(student1);
