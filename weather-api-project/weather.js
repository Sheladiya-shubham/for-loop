const API = "fe4f9aba1ae7d45eaff78d98bbbf4c5b";
const dayEl = document.querySelector('.default-day');
const dateEl = document.querySelector('.default-date');
const btnEl = document.querySelector('.btn-search');
const inputEl = document.querySelector('.input-field');

const inconscontainer = document.querySelector(".icons");
const dayinfoEl = document.querySelector(".day-info");
const listcontentEl = document.querySelector(".list-content ul");



const days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// display the day
 const day = new Date ();
 const dayName = days[day.getDay()];
 dayEl.textContent = dayName;

// display the date
 let month = day.toLocaleString("default",{month:"long"});
 let date = day.getDate();
 let year = day.getFullYear();
dateEl.textContent = date + " " + month + " "+ year;

btnEl.addEventListener('click',(e)=>{
    e.preventDefault();
   
    // check empaty value
    if(inputEl.value !== ""){
        const search = inputEl.value;
       inputEl.value = "";

       findlocation(search);
    }  
    else{
        console.log("please enter the city or country name");
    }
})

async function findlocation(name){
    inconscontainer.innerHTML = "";
    dayinfoEl.innerHTML = "";
    listcontentEl.innerHTML ="";
   try{
 const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}`;
    const data = await fetch(API_URL);
    const result = await data.json();
    console.log(result);
    

    if(result.cod !== "404"){
        // display image content 
        const imagecontent = displayimagecontent(result);

        // display right side content 

        const rightSide = rightsidecontent(result);

        // forcast function

        displayforcast(result.coord.lat,result.coord.lon);

        setTimeout(()=>{
            inconscontainer.insertAdjacentHTML("afterbegin",imagecontent)
            inconscontainer.classList.add("fadein");
        dayinfoEl.insertAdjacentHTML("afterbegin",rightSide)
        },1500);
    }else{
       const message= `<h2 class="weather-temp">${result.cod}</h2>
                        <h3 class="cloudtxt">${result.message}</h3>`;
        inconscontainer.insertAdjacentHTML("afterbegin",message);
    }

   

   }
   catch(error){

   }
}
// display  image content and temp
function displayimagecontent(data){
    return `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="" />
                        <h2 class="weather-temp">${Math.round(data.main.temp - 275.15)}°C</h2>
                        <h3 class="cloudtxt">${data.weather[0].description}</h3>`
}

// display the right side content

function rightsidecontent (result){
return `   <div class="content">
            <p class="title">Name</p>
            <span class="value">${result.name}</span>
                </div>
                <div class="content">
                    <p class="title">Temp</p>
                    <span class="value">${Math.round(result.main.temp - 275.15)}°C</span>
                </div>
                <div class="content">
                    <p class="title">Humidity</p>
                    <span class="value">${result.main.humidity}%</span>
                </div>
                <div class="content">
                    <p class="title">wind speed</p>
                    <span class="value">${result.wind.speed}km/h</span>
                </div>`
}

async function displayforcast(lat, long) {
    const forcast_API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API}`;
    const data = await fetch(forcast_API);
    const result = await data.json();

    // filter the forcast
    const uniqeforcastdays = [];
    const daysforcast = result.list.filter((forcast) => {
        const forcastdate = new Date(forcast.dt_txt).getDate(); 
        if (!uniqeforcastdays.includes(forcastdate)) {
            return uniqeforcastdays.push(forcastdate); 
        }
    });

    // console.log(daysforcast);
    daysforcast.forEach((content, indx) => {
        if (indx <= 3) {
            listcontentEl.insertAdjacentHTML("afterbegin", forcast(content)); 
        }
    });
}


// forcast html element data

function forcast(frcontent){
    const day = new Date(frcontent.dt_txt);
    const dayName = days[day.getDay()];
    const splitDay = dayName.split("",3)
    const joinDay = splitDay.join("");
    console.log(joinDay );
    // console.log(dayName);

    return ` <li>
                            <img src="https://openweathermap.org/img/wn/${frcontent.weather[0].icon}@2x.png">
                            <span>${joinDay}</span>
                            <span class="day-temp">${Math.round(frcontent.main.temp - 275.15)}°C</span>
                        </li>`
}


