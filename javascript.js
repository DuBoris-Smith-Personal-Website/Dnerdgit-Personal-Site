console.log("Hello World");

let raceNumber= Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;

if (age >= 18 && registeredEarly === true) {
    raceNumber += 1000;
}
if (age >= 18 && registeredEarly === true) {
    console.log(`Early registrants 18 and over start their race at 09:30am.`);
} else if (age >= 18 && registeredEarly === false) {
    console.log(`Late registrates 18 and over start their race at 11:00am.`)
} else if (age < 18) {
    console.log(`Youth will run at 12:30pm.`);
} else {
    console.log(`See registration desk for details`);
}
