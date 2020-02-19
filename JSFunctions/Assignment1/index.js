function getDay(date) {
    console.log(`The Date of ${date} is: `);
    console.log(date.getDate());
}

getDay(new Date());

getDay(new Date("December 17, 1995 03:24:00"));

getDay(new Date(2020, 12, 12));

