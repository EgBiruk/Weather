fetch('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
.then((response) =>  response.json())
.then((data) => {
render1(data);
render2(data);
})

function render1(data) {

let now = new Date();
let timeP = now.toLocaleTimeString();



const icon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`

const template = `
<div class="top">
                <p>${data.city.name}</p>
                <p>${timeP}</p>
                <p class="speedP">Speed</p>
            </div>
            <div class="center">
                <img src="${icon}" alt="">
                <p>${data.list[0].weather[0].main}</p>
                <p>${data.list[0].main.temp}°C</p>
            </div>
            <div class="bottom">
                <p>${data.list[0].wind.speed} m/s</p>
            </div>
            `
document.querySelector(".current").innerHTML = template;

}

function render2(data) {

    for (let i = 0; i < data.list.length; i += 8) {
        
        const icon = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`

        const template = `
        <div class="fc-div">
        <div class="fc-left">
        <p>${data.list[i].dt_txt}</p>
        </div>
        <div class="fc-mid">
        <img src="${icon}" alt="">
        </div>
        <div class="fc-right">
        <p>${data.list[i].main.temp}°C</p>
        </div>
    </div>
        `
        document.querySelector(".forecast").innerHTML += template;
    }
}