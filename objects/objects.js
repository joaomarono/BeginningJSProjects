
function makePerson(){
    var hair = document.getElementById("hair").value;
    var skin_color = document.getElementById("skin").value;
    var height = document.getElementById("height").value;


    //createObject2(hair,skin_color,height);

    var person =  new personConstructor(hair, skin_color, height);
    var result = "The person you create ";

    for(name in person)
       result += "have " + person[name] + " " + name + ", ";


    document.getElementById("result").innerHTML = result;



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
    var person = {'hair' : hair, 'skin' : skin, 'height' : height , displayHairColor : function (){document.write(hair);}} //This object can have as much as function we want, now we have a function that writes the hair color


    person['age'] = 20;

    
    var result = "The person you create ";
    for(name in person)
       result += "have " + person[name] + " " + name + ", ";


    document.getElementById("result").innerHTML = result;

    

    person.displayHairColor();
}

//Constructor function for the object person
function personConstructor(hair, skin, height){
    this.hair = hair;
    this.skin = skin;
    this.height = height;
}

