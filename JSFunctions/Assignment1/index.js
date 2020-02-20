const weeks = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDay(date) {
    console.log(`The Day of ${date} is: `);
    console.log(weeks[date.getDay()]);
}

getDay(new Date());

getDay(new Date("December 17, 1995 03:24:00"));

getDay(new Date(2020, 12, 12));

