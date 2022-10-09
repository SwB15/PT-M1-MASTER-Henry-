x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    var x = 10;
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
}
c(8, 9, 10);
console.log(b);
console.log(x);

//-------------------------------------------
console.log(bar);
//console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//-------------------------------------------
var instructor = "Tony";
if (true) {
    var instructor = "Franco";
}
console.log(instructor);


//-------------------------------------------
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

//-------------------------------------------
