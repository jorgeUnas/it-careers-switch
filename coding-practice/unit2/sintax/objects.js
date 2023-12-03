// object 

let person = {
    name:'jorge',
    surname: 'unas',
    fullName: function(){
        return this.name + " "+this.surname;
    }
}

console.log(person.name);
console.log(person.fullName());


// Constructor

function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.fullName = function(separator){
        return name + separator + surname;
    }
}

let carlos = new Person('carlos', 'perez');


console.log(carlos.name);
console.log(carlos.fullName(" "));
