let myGrade = 50;
if (myGrade >= 90) {
    console.log("I got an A!");
}
else if (myGrade <90 && myGrade > 80) {
    console.log("I got a B");
}
else if (myGrade < 80 && myGrade > 70) {
    console.log("I got a C");
}
else if (myGrade < 70 && myGrade > 60) {
    console.log("I got a D")
}
else if (myGrade < 60 && myGrade <50) {
    console.log("I got an F");
}

switch (true) {
    case myGrade >= 90: console.log("A") 
                        break;
    case myGrade >= 80: console.log("B")
                        break;
    case myGrade >= 70: console.log("C")
                        break;
    case myGrade >= 60: console.log("D")
                        break;
    default: console.log("F");
                        break;
}

// I prefer to use the switch as for me it is easier to understand and read.

for (let i = 1; i <=100; i++) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else {
        console.log("!");
    }
}
    
