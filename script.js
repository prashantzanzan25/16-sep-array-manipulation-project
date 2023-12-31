// Sample array of developers and admins
let peopleArray = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1: Print Developers
function printDevelopers() {
  for (let person of peopleArray) {
    console.log(person.name, '-', person.profession);
  }
}

// 2: Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');
  
  const newData = { name, age, profession };
  peopleArray.push(newData);
}

// 3: Remove Admins
function removeAdmin() {
  peopleArray = peopleArray.filter(person => person.profession !== 'admin');
}

// 4: Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: 'Sam', age: 35, profession: 'developer' },
    { name: 'Emma', age: 27, profession: 'admin' },
  ];

  const combinedArray = peopleArray.concat(dummyArray);
  console.log(combinedArray);
}

// 5: Average Age
function averageAge() {
  const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / peopleArray.length;
  console.log('Average Age:', avgAge.toFixed(2));
}

// 6: Age Check
function checkAgeAbove25() {
  const isAbove25 = peopleArray.some(person => person.age > 25);
  console.log('Is there at least one person above 25?', isAbove25);
}

// 7: Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(peopleArray.map(person => person.profession))];
  console.log('Unique Professions:', professions.join(', '));
}

// 8: Sort by Age
function sortByAge() {
  peopleArray.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', peopleArray);
}

// 9: Update Profession
function updateJohnsProfession() {
  const john = peopleArray.find(person => person.name === 'John');
  if (john) {
    john.profession = 'manager';
  }
}

// 10: Profession Count
function getTotalProfessions() {
  const developerCount = peopleArray.filter(person => person.profession === 'developer').length;
  const adminCount = peopleArray.filter(person => person.profession === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}




