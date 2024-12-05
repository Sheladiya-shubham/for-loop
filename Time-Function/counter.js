let counter =0;
let countervalue=document.getElementById('counter-value');

document.getElementById('increment-btn').addEventListener('click',()=>{
    counter++;
    countervalue.innerHTML = counter;
});

document.getElementById('decrement-btn').addEventListener('click',()=>{
    if (counter > 0) { 
        counter--;
        countervalue.innerHTML = counter;
    }
  
});

document.getElementById('reset').addEventListener('click',()=>{
    counter=0;
    countervalue.innerHTML = counter;
    
});