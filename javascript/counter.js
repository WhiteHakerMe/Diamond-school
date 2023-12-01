var counter1 = 0;
var counter2 =0
var counter3 =0

var intervalId1 = setInterval(function() {
    counter1++;
    if (counter1 === 828) {
        clearInterval(intervalId1);
    }
    document.getElementById("counter1").innerHTML = counter1;
}, 10);

var intervalId2 = setInterval(function() {
    counter2++;
    if (counter2 === 393) {
        clearInterval(intervalId2);
    }
    document.getElementById("counter2").innerHTML = counter2;
}, 10);

var intervalId3 = setInterval(function() {
    counter3++;
    if (counter3 === 500) {
        clearInterval(intervalId3);
    }
    document.getElementById("counter3").innerHTML = counter3;
}, 10);
