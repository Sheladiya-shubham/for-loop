//         Practice Program List:
 
//  1. Print out 10 to 1

let i;
for(i=10;i>=1;i--){
    console.log(i);
}

//  2. Print out 51 to 99

let h;

for(h=51;h<=99;h++){
    console.log(h);
}
//  3. Enter n  and print out 1 to n

let number=Number(prompt('Enter the Number='));
    console.log(typeof number);

for(let s=1; s<=number;s++){
    console.log(s);
}
//  4. Enter n and print out n to 1

for(let k=number;k>=1;k--){
    console.log(k);
}
//  5. Enter n and print out -n to n

for(let g=-number;g<=number;g++){
    console.log(g);
}
//  6. Enter n and print out odd no. up to n

for(let a = 1; a<=number; a+=2){		
    console.log(a);
}
//  7. Enter n and print out even no. up to n

for(let t = 1; t<=number; t++){
    if(t % 2==0){
        console.log(t);
    }
}
7

