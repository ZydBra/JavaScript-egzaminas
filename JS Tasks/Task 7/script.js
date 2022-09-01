/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

//Jei reikia gauti "key" reikšmes:
function showObjectKeys (anyObject) {
  const newArray = Object.values(anyObject);
  return newArray 
};

console.log(showObjectKeys(audi))

//Jei turėta omeny "key" pavadinimai:
function showObjectKeysNames (anyObject) {
  const newArray = Object.keys(anyObject);
  return newArray 
};

console.log(showObjectKeysNames(audi))