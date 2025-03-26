var feet = document.getElementById("feet");
var inch = document.getElementById("inch");
feet.addEventListener("input", function(){
    f = this.value;
    i = f*12;
    inch.value = i;
});

inch.addEventListener("input", function(){
    i = this.value;
    f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});