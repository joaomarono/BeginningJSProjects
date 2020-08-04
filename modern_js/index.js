let fname = 'Ryan';
let lname = 'D';
//let age = prompt("What is Ryan's age?");

//old way
//let result = fname + ' ' + lname + ' ' + age + ' years old';
//alert(result);


//tempalte string(new way)
//let result = `${fname} ${lname} ${age} years old`;
//alert(result);

//deafult parameters
//function welcome(user = 'Anonymous', message='welcome'){
//    alert(`Hello ${user}, ${message}`);
//}

//welcome('Ryan', 'Good morning');

//arrow function
//    name          args                body
let welcome = (user, message) => alert(`Hello ${user}, ${message}`);
//welcome('Ryan', 'Good Morning');


let createBlog = (title, body) => {
    if(!title){
        throw new Error('No tilte!');
    }
    if(!body){
        throw new Error('No body!');
    }

    return alert(`${title} - ${body}`);
}


//object
let nepal = {
    //add propertie
    mountains : ["Everest", "Fish tail", "Annapurna"],
    //add method
    printWithDash : function() {
        setTimeout(() => console.log(this.mountains.join(' - ')), 3000);
    }
};

//nepal.printWithDash();


let thingsToDo = {
    Morning : 'Exercise',
    Afternoon : 'Work',
    Evening : 'Code',
    Night : ['Sleep', 'Dream']
}


//Acess Properties in the object thingsToDo
let {Morning, Afternoon} = thingsToDo;
//console.log(Morning + " - " + Afternoon);


//Function calling a object and extract properties 
let uniStudent = student =>{
    let {name, university} = student;
    console.log(`${name} from ${university}`);
}

let someStudent = {
    name: 'Ryan',
    university: 'Toronto'
}
//uniStudent(someStudent);


//ARRAYS
let[first,second,third] = ['Everest', 'Fish Tail', 'Annapurna'];
let[ , ,third2] = ['Everest', 'Fish Tail', 'Annapurna'];
//console.log(`${first} - ${second} - ${third}`)
//console.log(third2);


var name = 'Everest';
var height = 8848;
var output = function() {
    console.log(`Mt. ${this.name} is ${this.height} meter tall!`);
};

var adventureClimbing = {name, height, output};
//adventureClimbing.output();


var mountainsNepal = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsJapan = ['Fuji'];

var allMountains = [...mountainsNepal, ...mountainsJapan];
//console.log(allMountains);



var day = {
    breafast: 'toast with milk',
    lunch: 'rice with chicken'
}

var night = {
    dinner: 'noodle soup'
}

var picnic = {...day, ...night};
//console.log(picnic);


var rivers = ['Sunkoshi', 'Tamakoshi', 'Spatakoshi'];

var [firstRiver, ...rest] = rivers;
console.log(`The first ${firstRiver} and the rest ${rest}`);