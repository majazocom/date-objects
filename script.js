//Del 1
//Skriv en funktion för att få ut dagens datum
let currentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear().toString(); //O use toString();
    

    return (`${dd}-${mm}-${yyyy}`)
}

console.log(currentDate());

//Del 2
//Skriv en funktion för att få ut numret på månaden

let currentMonth = () => {
    let today = new Date();
    let mm = today.getMonth() + 1;

    return `${mm}`
}

console.log(currentMonth());

//Del 2.5
//Skriv en funktion för att få ut antalet dagar i månaden

//daysInMonth(1, 2020);

let daysInMonth = (month,year) => {

    return new Date(year, month, 0).getDate();

    //Vi vill ha ut antalet dagar
}

console.log(daysInMonth(1, 2020));
console.log(daysInMonth(3, 2020));
console.log(daysInMonth(9, 2020));

//Del 3
//Skriv en funktion för att få ut månadens namn från en lista
let months = [ 'januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

let currentMonth2 = () => {
    let today = new Date();
    return months[today.getMonth()];
}

console.log(currentMonth2());

//Del 4
//Skriv en funktion som jämför två datum, alltså kollar om ett datum är senare än det första

let date1 = new Date('12/06/2020 00:00');
let date2 = new Date('11/20/2020 00:00');
let date3 = new Date('11/20/2020 00:00');

let compareDates = (d1,d2) => {
    if (d1>d2) {
        return "first date is later"
    } else if (d1<d2) {
        return "second date is later"
    } else {
        return "they are the same"
    }
}

console.log(compareDates(date2,date2));


//Del 5
//Skriv en funktion som lägger till några extra minuter på ett datum (plus)

//Del 6
//Skriv en funktion som kollar om dagens datum är helg (lör/sön) (if)

//Del 7
//Skriv en funktion som kollar tidsspannet mellan två datum (minus)

//Del 8
//Skriv en funktion som returnerar sista dagen på en månad

//Del 9
//Skriv en funktion som får ut gårdagens datum

//Del 10
//Skriv en funktion för att kolla om datumet är giltigt eller ej
