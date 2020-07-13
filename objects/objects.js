
function makePerson(){
    var hair = document.getElementById("hair").value;
    var skin_color = document.getElementById("skin").value;
    var height = document.getElementById("height").value;


    createObject2(hair,skin_color,height);
}

//We have two ways to create objects, the first is create an empty object and adding the properties
function createObject1(hair, skin, height){
    var person = new Object();
    person.hair = hair;
    person.skin = skin;
    person.height = height;

    var result = "The person you create ";
    for(name in person)
       result += "have " + person[name] + " " + name + ", ";


    document.getElementById("result").innerHTML = result;

}

//.... the second is by creating the object already with the properties
function createObject2(hair, skin, height){
    var person = {'hair' : hair, 'skin' : skin, 'height' : height }

    person['age'] = 20;

    var result = "The person you create ";
    for(name in person)
       result += "have " + person[name] + " " + name + ", ";


    document.getElementById("result").innerHTML = result;

}