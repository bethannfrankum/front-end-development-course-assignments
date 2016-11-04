////////Part1

var name = "Beth Ann";
document.getElementById('partOne').innerHTML = name;

////////Part2

var foo = "i forgot to do this";
foo = "This is not an integer";
document.getElementById('partTwo').innerHTML = foo
    ////////Part3
var partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;
document.getElementById('partThree').innerHTML = partThree




//////////////Part4
var fullName = "fName" + " " + "lName";
document.getElementById('partFour').innerHTML = fullName


//////////////Part5
var myHtml = "";
myHtml = "<h2>Title</h2>" + "<p>Lorem ipsum dolor</p>" + "<h3>Pellentesque habitant morbi</h3>" + "<p>Morbi in sem quis dui placerat ornare. </p>";
document.getElementById('partFive').innerHTML = myHtml;

//////////////Part6



var part6Number = getRandomNumber();
var part6Result;
if (part6Number > 50) {
    part6Result = "Above 50";
} else {
    part6Result = "Below or equal to 50";
}
document.getElementById('part6Number').innerHTML = part6Number;
document.getElementById('part6Result').innerHTML = part6Result;

/**
 *      Part 7
 */
var part7Number = getRandomNumber();

var part7Result;
if (part7Number < 25) {
    part7Result = "Below 25"
} else if (part7Number >= 25 && part7Number < 50) {
    part7Result
}


////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1)) + 1;
}