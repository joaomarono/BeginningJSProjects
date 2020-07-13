var form = document.getElementById("form");

function fib_form(){
    var x = form.elements[0].value;
    var result = fib(x);
    document.getElementById("result").innerHTML = "The finonacci number for " + x + " is " + result;

}

function fib(num){
    if(num == 1){
        return 0;
    }
    if(num == 2){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}