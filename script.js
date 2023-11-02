let myGrade = 85;
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
}