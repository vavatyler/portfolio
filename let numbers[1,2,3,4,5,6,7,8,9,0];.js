let numbers[1,2,3,4,5,6,7,8,9,0];
let oddnumbers=[];
let  sum=0;
for(let i=0; i<numbers;i++){
    if(numbers%2!=0){
        oddnumbers.push(numbers[i]);
        sum+=numbers;
    }
}console.log(oddnumbers);
console.log(sum);