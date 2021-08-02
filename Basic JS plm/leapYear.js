// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } 
    else{
        console.log(year + ' is not a leap year');

    }
}

const year = [2000, 1700];

const year1 = year[0];
const year2 = year[1]

checkLeapYear(year1);
checkLeapYear(year2);