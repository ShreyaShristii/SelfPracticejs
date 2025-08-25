let a=5;
const b="4";
console.log(a+Number(b));
console.log(b);
console.log(typeof(b));
console.log(a+b);
console.log(typeof null);
console.log(typeof undefined);
console.log(null==undefined);
console.log(null===undefined);
function add(a,b){
    return a+b;
}
console.log(add(4,2));
console.log(add("4","2"));
function isInt(x){
    return(Number.isInteger(x));
}
console.log(isInt(5));
console.log(isInt(2.2));
console.log(isInt("10"));
function toNum(str){
    return Number(str);

}
console.log(toNum("5"));
function max3(a, b, c) {
    let max = a;          // assume a is max first

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}

console.log(max3(34, 321, 24231));  // 24231
console.log(max3(-1, -5, -3));      // -1
console.log(max3(10, 10, 2));       // 10
