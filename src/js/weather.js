const API_KEY= "262ea3790b443221e04d5b8848b9c1fc"


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText=data.name
        weather.innerText=`${data.weather[0].main}, ${data.main.temp} and it feels like ${data.main.feels_like}`;
    });
}
function onGeoError(){
    alert("Can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError)