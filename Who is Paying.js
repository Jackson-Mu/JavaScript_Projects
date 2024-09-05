var list = ["Raissa", "Divine","Jackson" ,"Aimable", "Allen", "Sarah", "Berthile"];

function whoIsPaying(list) {
    var students = list.length;
    var randomStudentPosition = Math.floor(Math.random() * students);
    var randomStudent = list[randomStudentPosition]; // Use 'list' instead of 'names'
    return randomStudent + ", is going to pay for the meal today!";
}

console.log(whoIsPaying(list));
