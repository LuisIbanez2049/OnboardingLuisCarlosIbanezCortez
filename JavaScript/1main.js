console.log("Starting javascript...");

//----------------------------------------------------------------LEVEL: LOW--------------------------------------------------------------------

console.log("---------------EJERCICIOS BASICOS NIVEL BAJO 1-2-3-4-5-6-7-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

let myName = "Luis";
console.log(myName);
let myLastName = "Ibañez";
let myAge = 22;
let myPet = "Rufus"
let petAge = 4;
let fullName = `${myName} ${myLastName}`

let presentationText = `Hi, my name is ${fullName}. I am ${myAge} years old. I have a pet called ${myPet} and it is ${petAge} years old`;
console.log(presentationText);

//----------------------------------------------------------------LEVEL: MEDIUM--------------------------------------------------------------------
console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO 1-2-3-4-5-6-7-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

let sumAges, subtractAges, productAges, divisionAges;

sumAges = myAge + petAge;
subtractAges = myAge - petAge;
productAges = myAge * petAge;
divisionAges = myAge / petAge;

console.log(`${sumAges} ${subtractAges} ${productAges} ${divisionAges}`);

let student = 
{
    studentName: "Pepe",
    studentLastName: "Smith",
    studentAge: 20,
    studentID: 2049,
    studentCollege : "Harvard"
}

console.table(student);
console.log(student.studentName)
console.log(student.studentLastName)
console.log(student.studentAge)
console.log(student.studentID)
console.log(student.studentCollege)

let pet =
{
    petName: "Rufus",
    petAge: 5,
    petRace: "Boxer",
    petHobbie: "run on the treadmill",
    petFavoriteFood: "meat"

}

console.table(pet);
console.log(pet.petName)
console.log(pet.petAge)
console.log(pet.petRace)
console.log(pet.petHobbie)
console.log(pet.petFavoriteFood)
