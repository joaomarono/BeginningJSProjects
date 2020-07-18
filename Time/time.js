var time = new Date();
makeDate();

function makeDate(){
    var x = "Today is ";

    x += time.getDate() + " ";
    x += time.getMonth() + " ";
    x += time.getFullYear() + " ";

    x += "<br>" + makeTime();

    //console.log(time.getFullYear());

    document.write(x);

}


function makeTime(){
    var y = "The time is ";
     y += time.getHours() + " ";
     y += time.getMinutes() + " ";
     y += time.getSeconds() + " ";
    return y;

}


