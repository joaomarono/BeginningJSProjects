
var size;
var board = [];

const tiles_array = ["tile1", "tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile9","tile10"];
const colors = ["red", "blue", "yellow", "purple", "black"];

var red_array = [],
    blue_array = [],
    yellow_array = [],
    purple_array = [],
    black_array = [];



var last_color = "";
var click = 0;
var clicked_tiles = [];
var duplicate_click = false;
//the game active variable is not used because in the beginning we dont show the tiles
var game_active = false;

//get the value from radio input
function getCheckedRadio(){
    var radios = document.getElementsByName("manyTiles");

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
        // do whatever you want with the checked radio
        size = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
        }
    }
}


//create variables
function clearVariables(){
    board = [];
    getCheckedRadio();
}

//create html elements
function createElements(){

    //create reset button
    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset the game";
    resetBtn.id = "reset";
    document.body.appendChild(resetBtn);

}

//remove html elements
function removeElements(){
    
    //remove reset button
    var resetBtn = document.getElementById("reset");
    if(resetBtn){
        resetBtn.remove();
    }

    //remove each tile
    removeElementsByClass("tiles"); 

}

//Remove each element in a class, this is used to remove the tiles 
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//create listeners
function createEventListeners(){
    document.getElementById("start").addEventListener("click", start_game);
    document.getElementById("reset").addEventListener("click", reset_game);
    
    //add tiles
    for(var i = 0; i < size; i++){

        var tile = document.createElement("div");
        tile.id = board[i];
        tile.className = "tiles"; 
        document.body.appendChild(tile);


    }
    
    //add tile listiners
    if(size == 4){

        document.getElementById("tile1").addEventListener("click", function(){tiles("tile1")});
        document.getElementById("tile2").addEventListener("click", function(){tiles("tile2")});
        document.getElementById("tile3").addEventListener("click", function(){tiles("tile3")});
        document.getElementById("tile4").addEventListener("click", function(){tiles("tile4")});
    }
    else if(size == 6){

        document.getElementById("tile1").addEventListener("click", function(){tiles("tile1")});
        document.getElementById("tile2").addEventListener("click", function(){tiles("tile2")});
        document.getElementById("tile3").addEventListener("click", function(){tiles("tile3")});
        document.getElementById("tile4").addEventListener("click", function(){tiles("tile4")});
        document.getElementById("tile5").addEventListener("click", function(){tiles("tile5")});
        document.getElementById("tile6").addEventListener("click", function(){tiles("tile6")});
    }
    else if(size == 8){

        document.getElementById("tile1").addEventListener("click", function(){tiles("tile1")});
        document.getElementById("tile2").addEventListener("click", function(){tiles("tile2")});
        document.getElementById("tile3").addEventListener("click", function(){tiles("tile3")});
        document.getElementById("tile4").addEventListener("click", function(){tiles("tile4")});
        document.getElementById("tile5").addEventListener("click", function(){tiles("tile5")});
        document.getElementById("tile6").addEventListener("click", function(){tiles("tile6")});
        document.getElementById("tile7").addEventListener("click", function(){tiles("tile7")});
        document.getElementById("tile8").addEventListener("click", function(){tiles("tile8")});
        
    }
    else if(size == 10){

        document.getElementById("tile1").addEventListener("click", function(){tiles("tile1")});
        document.getElementById("tile2").addEventListener("click", function(){tiles("tile2")});
        document.getElementById("tile3").addEventListener("click", function(){tiles("tile3")});
        document.getElementById("tile4").addEventListener("click", function(){tiles("tile4")});
        document.getElementById("tile5").addEventListener("click", function(){tiles("tile5")});
        document.getElementById("tile6").addEventListener("click", function(){tiles("tile6")});
        document.getElementById("tile7").addEventListener("click", function(){tiles("tile7")});
        document.getElementById("tile8").addEventListener("click", function(){tiles("tile8")});
        document.getElementById("tile9").addEventListener("click", function(){tiles("tile9")});
        document.getElementById("tile10").addEventListener("click", function(){tiles("tile10")});
    
    
    
    }

}

//Initialize Variables
function initializeVariables(){

    //initialize the board
    for(var i = 0; i < size; i++){
        board.push(tiles_array[i]);
    }

}

//Reset the variables when starting and reseting the game
function reset_var_shallow(){
   
    //last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
        click = 0,
        clicked_tiles = [],
        duplicate_click = false;

    game_active = true;
    
    //put all the tiles with the same color
    for(var i = 0; i < size; i++){
        document.getElementById(board[i]).style.backgroundColor = "cadetblue";
    }

    //remove the winning text from previous game
    document.getElementById("result").innerHTML = null;

}

//Reset the colors from the game
function reset_var_deep(){

    var red = 0,
        blue = 0,
        yellow = 0,
        purple = 0,
        black = 0;

    red_array = [],
        blue_array = [],
        yellow_array = [],
        purple_array = [],
        black_array = [];
        
        
    for(var i = 0; i < size; i++){
        var num = Math.floor(Math.random() * size/2);
        if(num === 0){
            if(red < 2){
                red++;
                red_array.push(board[i]);
                
            }
            else{
                i--;
            }
        }

        else if(num === 1){
            if(blue < 2){
                blue++;
                blue_array.push(board[i]);
                
            }
            else{
                i--;
            }
        }

        else if(num === 2){
            if(yellow < 2){
                yellow++;
                yellow_array.push(board[i]);
                
            }
            else{
                i--;
            }
        }


        else if(num === 3){
            if(purple < 2){
                purple++;
                purple_array.push(board[i]);
                
            }
            else{
                i--;
            }
        }


        else if(num === 4){
            if(black < 2){
                black++;
                black_array.push(board[i]);
                
            }
            else{
                i--;
            }
        }


    }
    

}

//REset when you fail to match colors
function fail_reset(){

    //last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
    clicked_tiles = [],
    duplicate_click = false;

    for(var i = 1; i <= size; i++){
        document.getElementById("tile" + i).style.backgroundColor = "cadetblue";
    }

}

//start game button
function start_game(){
    clearVariables(); //limpa o tabuleiro e cores
    removeElements(); //remove os elementos
    initializeVariables(); //Initialize variables
    createElements(); //create elements in html
    createEventListeners(); //create event listeners
    reset_var_shallow(); //reset the variables that are used in the game
    reset_var_deep(); //reset colors from tiles
    
}

//reset game button
function reset_game(){

    reset_var_shallow();//reset the variables that are used in the game

}

//function that executes when a tile is clicked
function tiles(tile){

    if(game_active){
        
        for(var i = 0; i < clicked_tiles.length; i++){
           
            if(tile == clicked_tiles[i]){
               
                duplicate_click = true;
           
            }

        }

        //if you click a tile that is not clicked yet do this, else means that you are clicking on tile that you previous clicked
        if(!duplicate_click){
                
                if(tile == red_array[0] || tile == red_array[1]){

                    var color = colors[0];
                    check(color, tile);

                }
            
                else if(tile == blue_array[0] || tile == blue_array[1]){
                    
                    var color = colors[1];


                    check(color, tile);
                }

                else if(tile == yellow_array[0] || tile == yellow_array[1]){
                    
                    var color = colors[2];

                    check(color, tile);

                }

                else if(tile == purple_array[0] || tile == purple_array[1]){
                    
                    var color = colors[3];

                    check(color, tile);

                }

                else if(tile == black_array[0] || tile == black_array[1]){
                    var color = colors[4];
                    check(color, tile);

                }            
        }

        duplicate_click = false;

    
    }

    //here verify if you win
    if(clicked_tiles.length == size){
        document.getElementById("result").innerHTML = "GANHASTES! Acabastes com " + click + " clickes!";
    }
}


function check(color, tile){

    click++;
    
    //verify if you previous clicked on a tile
    if(last_color.length > 2){
        
        document.getElementById(tile).style.backgroundColor = color;
        
        //verify if the last color you clicked is equal to this color
        if(last_color === color){

            clicked_tiles.push(tile);
            last_color = "";

        }
        else{
            game_active = false;
            setTimeout(function(){
                fail_reset();

            }, 2000);

        }

    }
    else{
        document.getElementById(tile).style.backgroundColor = color;
        last_color = color;
        clicked_tiles.push(tile);

    }



}