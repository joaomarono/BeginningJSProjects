
var size = document.getElementById("manyTiles").value;
var board = [];
var userColors = [];

//This is the tile array
const tiles_array = ["tile1", "tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile9","tile10"];

//Thi is the color array
const colors = ["red", "blue", "yellow", "purple", "black"];

//Arrays will hold wich tiles are the  propriate  color
var red_array = [],
    blue_array = [],
    yellow_array = [],
    purple_array = [],
    black_array = [];

//the last tile color clicked
var last_color = "";

//count the amount of clicks
var click = 0;

//store the tile clicked on this array
var clicked_tiles = [];

//we dont need this, every click we can check if the tile that is clicked is on the licked_tiles array
//bool if the same tile is clicked or not
var duplicate_click = false;

//gamstart variable true or false, true = game is active
var game_active = false;

function playGame(){
    
    createElements();
    createEventListeners();
    initializeVariables();

}


function createElements(){
    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset the game";
    resetBtn.id = "reset";
    document.body.appendChild(resetBtn);



}

function createEventListeners(){
    document.getElementById("start").addEventListener("click", start_game);
    document.getElementById("reset").addEventListener("click", reset_game);
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

function initializeVariables(){

    //initialize the board
    for(var i = 0; i < size; i++){
        board.push(tiles_array[i]);
    }

    //choosing the colors that we are gonna use
    for(var j = 0; j < size/2; j++){
        var num = Math.floor(Math.random() * 5);
        

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
    
    for(var i = 1; i < 11; i++){
        document.getElementById("tile" + i).style.backgroundColor = "cadetblue";
    }

    document.getElementById("result").innerHTML = null;

}


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
        
        
    for(var i = 0; i < 10; i++){
        var num = Math.floor(Math.random() * 5);
        if(num === 0){
            if(red < 2){
                red++;
                red_array.push(tiles_array[i]);
                
            }
            else{
                i--;
            }
        }

        else if(num === 1){
            if(blue < 2){
                blue++;
                blue_array.push(tiles_array[i]);
                
            }
            else{
                i--;
            }
        }

        else if(num === 2){
            if(yellow < 2){
                yellow++;
                yellow_array.push(tiles_array[i]);
                
            }
            else{
                i--;
            }
        }


        else if(num === 3){
            if(purple < 2){
                purple++;
                purple_array.push(tiles_array[i]);
                
            }
            else{
                i--;
            }
        }


        else if(num === 4){
            if(black < 2){
                black++;
                black_array.push(tiles_array[i]);
                
            }
            else{
                i--;
            }
        }


    }
    


}

function fail_reset(){

    //last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
    clicked_tiles = [],
    duplicate_click = false;

    game_active = true;

    for(var i = 1; i < 11; i++){
        document.getElementById("tile" + i).style.backgroundColor = "cadetblue";
    }

}

function start_game(){

    reset_var_shallow();
    reset_var_deep();

    console.log("start");
}


function reset_game(){

    reset_var_shallow();

    console.log("reset");
}

function tiles(tile){


    if(game_active){

        for(var i = 0; i < clicked_tiles.length; i++){
           
            if(tile == clicked_tiles[i]){
               
                duplicate_click = true;
           
            }

        }

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

    if(clicked_tiles.length == 10){
        document.getElementById("result").innerHTML = "GANHASTES! Acabastes com " + click + " clickes!";
    }
}


function check(color, tile){

    click++;
    
    if(last_color.length > 2){
        
        document.getElementById(tile).style.backgroundColor = color;
        
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