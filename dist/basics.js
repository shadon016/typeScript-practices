"use strict";
// basic types are
Object.defineProperty(exports, "__esModule", { value: true });
const name = "jhon";
const age = 27;
const phone = "18373673";
const human = true;
// multiple types
const multipleTypes = "2";
console.log(`${name} - ${age} - ${phone}`);
// typeof and instanceOf
if (typeof name === "string") {
    console.log("yes");
}
else {
    console.log("nope");
}
// ts er type er jonno typeof and custom type er jonno instanceOf use hobe ex:class er instances
class Human {
    name;
    constructor(input) {
        this.name = input;
    }
}
const sakib = new Human("sakib");
if (sakib instanceof Human) {
    console.log(true);
}
else {
    console.log(false);
}
