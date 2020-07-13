var form = document.getElementById("form");

function change(){

    var x = form.elements[0].value;
    var y = form.elements[1].value;
    var z = form["operation"].value;
    var result = 0;


    //Tambem podemos usar as funções abaixo para ir buscar os valores

    //var x2 = document.getElementById("first").value;
    //var y2 = document.getElementById("second").value;

    //var x3 = form["first"].value;
    //var y3 = form["second"].value;
 


    if(x && y && z){
        
        if(Number(x) && Number(y)){

            switch(z){

                case "add":
                    result = Number(x) + Number(y);
                    document.getElementById("result").innerHTML = result;
                    break;
                
                case "sub":
                    result = Number(x) - Number(y);
                    document.getElementById("result").innerHTML = result;
                    break;
                
                case "mult":
                    result = Number(x) * Number(y);
                    document.getElementById("result").innerHTML = result;
                    break;    
                
                case "div":
                    if(y == 0){
        
                        alert("You cant divide 0, its impossible!")
                        break;
                    
                    }
                
        
                    result = Number(x) / Number(y);
    
                    document.getElementById("result").innerHTML = result;
                    break;
            
                
            }

        }
        else{
            alert("The first two inputs need to be numbers");
        }
        
        

    }else{

        alert("You need to fill all inputs");

    }


    



}