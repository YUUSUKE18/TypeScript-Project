let greet : (a: string, b: number) => void;

greet = (name: string, age: number) => {
    console.log(`${name} is ${age}`);
}

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};
logDetails = (person: person) => {
    console.log(`${person.name} is ${person.age}`);
}