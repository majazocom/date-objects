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

let daysInMonth = (month,year) => {
    

    //Vi vill ha ut antalet dagar
}

//Del 3
//Skriv en funktion för att få ut månadens namn från en lista

//Del 4
//Skriv en funktion som jämför två datum, alltså kollar om ett datum är senare än det första

//Del 5
//Skriv en funktion som lägger till några extra minuter på ett datum

//Del 6
//Skriv en funktion som kollar om dagens datum är helg (lör/sön)

//Del 7
//Skriv en funktion som kollar tidsspannet mellan två datum

//Del 8
//Skriv en funktion som returnerar sista dagen på en månad

//Del 9
//Skriv en funktion som får ut gårdagens datum

//Del 10
//Skriv en funktion för att kolla om datumet är giltigt eller ej
