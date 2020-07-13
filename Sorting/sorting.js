function sorting_big_first(arr){

    var save;
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                
                save = arr[i];
                arr[i] = arr[j];
                arr[j] = save;

            }
        }
    }


    document.write(arr);

}


function sorting_small_first(arr){

    var save;

    for (var i = arr.length; i > 0; i--) {
        
        for(var j = 0; j < i; j++){

            if(arr[i] < arr[j]){

                save = arr[j];
                arr[j] = arr[i];
                arr[i] = save;

            }

        }
        
    }

    document.write(arr);

}


function verify(){
    if(k.length == 0){
        document.write("We dont have an array write now!");
        return;
    }

    document.write(k);

}


var k = [1, 5, 3, 2, 4];