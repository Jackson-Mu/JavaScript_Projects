var guestNames= ["Raissa", "Divine", "Aimable", "Allen", "Sarah", "Berthile"];
console.log(guestNames);

var name= prompt("Please provide me with your name?");

if (guestNames.includes(name)){
    alert("Great, You're Welcome to the event!")
}else {
    alert("Sorry you were not on the list of the event, maybe next time?")
}
