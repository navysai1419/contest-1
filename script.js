const data = [
  { name: "John", age: 24, profession: "developer" },
  { name: "Jane", age: 27, profession: "admin" },
];

// 1. Print Data:
function printDeveloper() {
  console.log('Developer:');
  data.forEach(item => {
    console.log(item.name, item.age, item.profession);
  });
}

// 2. Add Data:
function addData() {
  const name = prompt('Enter name:');
  const age = prompt('Enter age:');
  const profession = prompt('Enter profession:');
  const newData = { name: name, age: parseInt(age), profession: profession.toLowerCase() };
  data.push(newData);
}

// 3. Remove Admins:
function removeAdmin() {
  data= data.filter(item => item.profession.toLowerCase() !== 'admin');
}

// 4. Concatenate Array:
function concatenateArray() {
  let newArray = [
    { name: 'swapna', age: 25, profession: 'developer' },
    { name: 'priya', age: 32, profession: 'admin' },
  ];

  const resultArray = data.concat(newArray);
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age:
function averageAge() {
  const totalAge = data.reduce((sum, item) => sum + item.age, 0);
  const average = totalAge / data.length;
  console.log('Average Age:', average);
}

// 6. Age Check:
function checkAgeAbove25() {
  const isAbove25 = data.some(item => item.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
}

// 7. Unique Professions:
function uniqueProfessions() {
  const professions = [...new Set(data.map(item => item.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age:
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log('Sorted by Age:', data);
}

// 9. Update Profession:
function updateJohnsProfession() {
  const john = data.find(item => item.name.toLowerCase() === 'john');
  if (john) {
    john.profession = 'manager';
    console.log("John's profession updated to 'manager'.");
  }
}

// 10. Profession Count:
function getTotalProfessions() {
  const developerCount = data.filter(item => item.profession.toLowerCase() === 'developer').length;
  const adminCount = data.filter(item => item.profession.toLowerCase() === 'admin').length;
  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}
