// start here
console.log('hello world');
let name = 'allison';
name = 'emily';
const emily = 'cool';
console.log(name);
console.log(emily);
const colors = [
    'red',
    'blue',
    'green',
    'purple'
];

console.log('--standard for loop--');
for (let i=0; i<colors.length; i++){
    console.log(colors[i]);
};

console.log('--for of lop--');
for (let color of colors){
    console.log(color);
}

console.log('--with index--')
for (let [index, element] of colors.entries()){
    console.log(element + " is in index " + index);
    console.log(`${element} is in ${index}`);
};

console.log('--arrow functions--');
function addNumbers(a, b){
    return a + b;
};
console.log(addNumbers(1, 2));
const subtractNumbers = (a,b) => a-b;
console.log(subtractNumbers(5,3));

console.log('--array manipulation--');
const persons = [
    {
        id: 1,
        name: 'Lucas',
        mood: 'Hungry'
    },
    {
        id: 2,
        name: "Sasha",
        mood: "Excited"
    },
    {
        id: 1,
        name: "David",
        mood: "Uncaffeinated"
    }
];
console.log(persons[0]);
const personWithId1 = persons.find(person => person.id === 1);
console.log(personWithId1);

const peopleWithId1 = persons.filter(person => person.id === 1);
console.log(peopleWithId1);

persons.forEach(person => {
    if (person.mood === "Excited"){
        console.log(`${person.name} is ${person.mood}!`);
    }
});

const personsAfterMapping = persons.map(person => {
    if (person.mood === 'Excited'){
        person.mood = 'Tired'
    }
});
console.log(personsAfterMapping);