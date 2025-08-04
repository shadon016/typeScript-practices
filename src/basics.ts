// basic types are

const name:string="jhon"
const age:number=27

const phone:any="18373673"
const human:boolean=true
// multiple types

const multipleTypes:string|number="2"

console.log(`${name} - ${age} - ${phone}`);

// typeof and instanceOf

if(typeof name==="string"){
    console.log("yes");
}else{
    console.log("nope");
}

// ts er type er jonno typeof and custom type er jonno instanceOf use hobe ex:class er instances

class Human{
    name:string;
    constructor(input:string){
        this.name=input
    }
}

const sakib=new Human("sakib")

if(sakib instanceof Human){
    console.log(true);
}else{
    console.log(false);
}