let Fname = document.getElementById('fname');
let Femail= document.getElementById('femail');
let Fpass= document.getElementById('fpass');
const button =document.getElementById('btn');

let editname = document.getElementById('editname');
let editemail= document.getElementById('editemail');
let editpass= document.getElementById('editpass');
const updatebtn  =document.getElementById('updatebtn');

const tbody = document.querySelector("#tbody");
const addmodel = document.querySelector("#addmodel");
const editmodel = document.querySelector("#editmodel");


let updateindex = null;


button.addEventListener('click',()=>{
    let data = JSON.parse(localStorage.getItem("users"))||[];
    data.push(
        {
            name: Fname.value,
            email: Femail.value,
            password: Fpass.value,
});
    localStorage.setItem("users",JSON.stringify(data));
    loaddata();

    Fname.value = "";
    Femail.value = "";
    Fpass.value = "";
});

const loaddata = ( )=> {
    const users = JSON.parse(localStorage.getItem("users"));
    let result = ""
    users.forEach((user,index) => {
        let row =  `<tr>
        <td>${index+1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td><button onclick="editdata(${index})">Edit</button> || <button onclick="deletdata(${index})">Delete</button></td>
    </tr>
    `
    result = result+ row
    });
    tbody.innerHTML = result
};

 loaddata()

 const deletdata = (index) =>{
    const data = JSON.parse(localStorage.getItem('users'));
    data.splice(index,1);
    localStorage.setItem('users',JSON.stringify(data))
    loaddata();
 }

 const editdata = (index) =>{
    const data = JSON.parse(localStorage.getItem('users'));
    let user = data[index];


    addmodel.style.display = "none";
    editmodel.style.display = "block";

    editname.value = user.name;
    editemail.value = user.email;
    editpass.value = user.password;

    updateindex = index;
 };

 updatebtn.addEventListener('click', () =>{
    const data = JSON.parse(localStorage.getItem('users'));
    data[updateindex] ={
        name: editname .value,
        email: editemail .value,
        password: editpass .value,
    };

    localStorage.setItem('users',JSON.stringify(data));
    loaddata();

    editmodel.style.display = "none";
    addmodel.style.display = "block";
 });




