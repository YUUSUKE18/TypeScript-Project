let character: string;
let age: number;
let isLoggedIn: boolean;


let ninjas: string[]=[];

ninjas.push("yoshi");

let mixed:(string|number|boolean)[]=[];
mixed.push("yoshi");
mixed.push(25);
mixed.push(true);
mixed.push(false);
console.log(mixed);

let person:object;
let persons = {
  name: String,
  age: Number,
  favorite:[]=[],
}