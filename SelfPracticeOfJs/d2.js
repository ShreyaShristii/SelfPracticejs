// let n=Number(prompt("Enter a Numer:"));
// let s=0;
// for(let i=0;i<=n;i++){
//     s+=i;
// }
// console.log(s);
// function sum(a){
//     if(a==1){
//         return 1;
//     }
//     return a+sum(a-1);
// }
// console.log(sum(5));


// function checkVowel(a){
//     let vc=0;
//       for(let i=0;i<a.length;i++){
//         if (a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || a[i]=='u' || a[i]=='A' || a[i]=='E' || a[i]=='I' || a[i]=='O' || a[i]=='U'){
//             vc+=1;
//         }
//       }
//       return vc;
// }
// let str=prompt("Enter a String pleaase");
// console.log(checkVowel(str));
// //console.log(vc);
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

let a1 = Number(prompt("Enter a number"));
fizzBuzz(a1);

function unique(arr){
    let r=[];
    for(let i=0;i<arr.length;i++){
        if(r.includes(arr[i])===false){
            r.push(arr[i]);
        }
    }
    return r;

}
let a2=[5,5,1,2,3,2,5];
console.log(unique(a2));