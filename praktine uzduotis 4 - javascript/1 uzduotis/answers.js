// 1.1  Parašyti komandą kuri gražins automobilius, kurie turi parametrą "Miles_per_Gallon" ;
console.log("##### Uzduotis 1 ########");

const result1 = cars.filter( car => car.Miles_per_Gallon);

console.log(result1);

// 1.2. Parašyti komandą kuri gražins automobilius, kurie neturi "Miles_per_Gallon" ;
console.log("##### Uzduotis 2 ########");

const result2 = cars.filter( car => !car.Miles_per_Gallon);

console.log(result2);

// 1.3  Parašyti komandą kuri gražins automobilius, kurie turi parametrą 8 "Cylinders" ir "Miles_per_Gallon" parametras didesnis arba lygus 15.
console.log("##### Uzduotis 3 ########");

const result3 = cars.filter( car => car.Cylinders === 8 && car.Miles_per_Gallon >= 15);

console.log(result3);

// 1.4  Parašyti komandą kuri gražins automobilius su pridėtu papildomu laiku ojekte, kuris vadinasi "Kilowatts", kuris yra lygus "Horsepower" * 0.7457;
console.log("##### Uzduotis 4 ########");

const result4 = cars;
result4.forEach( (car) => {
    let kW = Math.round(car.Horsepower * 0.7457)
    car.Kilowatts = kW;
})

console.log(result4);

// 1.5  Parašyti komandą kuri gražins automobilius išrikiuotus pagal "Weight_in_lbs" didėjančia tvarka.
console.log("##### Uzduotis 5 ########");

const result5 = cars.sort( (a,b) => a.Weight_in_lbs - b.Weight_in_lbs);

console.log(result5);

// 1.6  Parašyti komandą kuri gražins true arba false reikšmę tikrinant ar visi automobiliai yra pagaminti "USA".
console.log("##### Uzduotis 6 ########");

let madeInUS = 0;
let madeElsewhere = 0;
const result6 = () => cars.forEach( el => el.Origin === "USA" ? madeInUS++ : madeElsewhere++ );

result6();

console.log(`Made in US: ${madeInUS} out of ${cars.length}.`);
console.log(`Made Elsewhere: ${madeElsewhere} out of ${cars.length}.`);