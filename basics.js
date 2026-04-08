const SumArray=arr=>arr.reduce((sum,num)=>sum+num,0);
console.log(SumArray([1,2,3,4,6,7]));

const factorial = (n) => {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

console.log(factorial(5)); // 120


function factorialWhile(n) {
    let result = 1;
    let i = 1;

    while (i <= n) {
        result *= i;
        i++;
    }

    return result;
}

console.log("Factorial (while):", factorialWhile(5));


function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("Level")); // true
console.log(isPalindrome("Hello")); // false

const personInfo = (name, age) => ({ name, age });

const person = personInfo("Praful", 20);

console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);

const htmlTemplate = `
<div>
    <h1>My Lab Report</h1>
    <p>This is a multi-line HTML template inserted via JS.</p>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>
</div>
`;

document.body.innerHTML += htmlTemplate;


function multiply(...nums) {
    return nums.reduce((product, num) => product * num, 1);
}

console.log("Product:", multiply(2, 3, 4));

const original = { name: "Praful", age: 20 };
const copy = { ...original, age: 21 };

console.log(copy);


const fruits = ["apple", "banana", "mango"];

const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits);



const nums = [1, 2, 2, 3, 3, 3, 4];

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);


const students = [
    { name: "A", age: 20, marks: 80 },
    { name: "B", age: 18, marks: 90 },
    { name: "C", age: 22, marks: 85 }
];

// Sort by age
students.sort((a, b) => a.age - b.age);
console.log("Sorted by age:", students);

// Sort by marks
students.sort((a, b) => b.marks - a.marks);
console.log("Sorted by marks:", students);

//let in 
const student = { name: "Praful", age: 20, marks: 95 };

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}