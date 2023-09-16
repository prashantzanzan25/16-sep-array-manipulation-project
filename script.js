const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log("Developers:", developers);
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter the name:");
    const age = parseInt(prompt("Enter the age:"));
    const profession = prompt("Enter the profession:");
    data.push({ name, age, profession });
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "dummy1", age: 30, profession: "developer" },
      { name: "dummy2", age: 28, profession: "admin" },
    ];
    const concatenatedArray = data.concat(dummyArray);
    console.log("Concatenated Array:", concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average Age:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    console.log("Age Above 25:", isAbove25 ? "Yes" : "No");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === "developer").length;
    const adminCount = data.filter(person => person.profession === "admin").length;
    console.log("Developer Count:", developerCount);
    console.log("Admin Count:", adminCount);
  }
  