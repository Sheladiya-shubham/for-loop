let pname = document.getElementById('pname');
let pdes= document.getElementById('pdes');
let pcat= document.getElementById('pcat');
let pprize= document.getElementById('pprice');
const button =document.getElementById('pbtn');

button.addEventListener('click',()=>{
    let data = JSON.parse(localStorage.getItem("product"))||[];
    data.push(
        {
            productname: pname.value,
            description: pdes.value,
            category: pcat.value,
            price: pprice.value,
            
});
    localStorage.setItem("product",JSON.stringify(data));

});



 




