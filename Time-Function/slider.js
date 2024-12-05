let quotes =[
    "/image/black-rose.jpg",
    "/image/beautiful-lotus-flower-black-backgroundgenerative-ai_391052-20445.avif", 
    "/image/snow-tree.jpg",
    "/image/sunwake-up.jpg"
 
]

let currentindex =0;
let intervalid;

const showdisplay = (index) =>{
    let text = document.getElementById('sliding');

    text.setAttribute("src",`.${quotes[index]}`)
};

document.getElementById('start-btn').addEventListener('click',()=>{
    intervalid = setInterval(() =>{
        currentindex = (currentindex + 1) % quotes.length;
        showdisplay(currentindex);
    },2000)
});

document.getElementById('stop-btn').addEventListener('click',()=>{
    clearInterval(intervalid);
    console.log('stop');
});