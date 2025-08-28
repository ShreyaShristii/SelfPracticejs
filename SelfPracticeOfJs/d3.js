// let nums=[30,1,2,45,23];
// nums.sort();
// console.log(nums);
// nums.sort((a,b)=>a-b);
// console.log(nums);
// nums.sort((a,b)=>b-a);
// console.log(nums);
let students=[{name:"A",grade:"X"},{name:"B",grade:"Y"},{name:"C",grade:"X"}];
//we want to group the name based on their grades

function groupBy(arr,key){
    let result={};
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        let groupV=item[key];
        if(!result[groupV]){
            result[groupV]=[];
        }
        result[groupV].push(item);
    }
    return result;
}
console.log(groupBy(students,"grade"));
let nums=[1,2,30];
let doubled=nums.map(x=>x*2);
console.log(doubled);
let d2=nums.filter(x=>x%2===0);
console.log(d2);
