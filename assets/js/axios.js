let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let pressureEle = document.getElementById("pressure");
let windEle = document.getElementById("wind-speed");
let humidityEle = document.getElementById("humidity");

let weatherdescEle = document.getElementById('Weatherdesc');
let btnEle = document.getElementById("btn");
let weatherIconEle = document.getElementById("weather-icon");

const apikey = 'd97712d130b37eaa93143e58e898fda8';

btnEle.onclick = function() {
    if (inputEle.value == "") {
        alert("Please enter the city");
    } else {
        let loc = inputEle.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        
        axios.get(url)
            .then(response => {
                const data = response.data;
                console.log(data);
                
                const name = data.name;
                const feels_like = data.main.feels_like;
                const description = data.weather[0].main;
                const iconCode = data.weather[0].icon;  
                const pressure = data.main.pressure;
                const windspeed = data.wind.speed;
                const humidity = data.main.humidity;

                tempEle.innerText = `Temperatute:${Math.floor(feels_like - 273)}°C` ; 
                locEle.innerText = `Location:${name}`;
                weatherdescEle.innerText = `Weather:${description}`;
                pressureEle.innerText =`pressure:${pressure}`;  
                windEle.innerText = `wind-speed:${windspeed}`;
                humidityEle.innerText = `Humidity:${humidity}`;               

                switch (description) {
                    case 'Clear':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/7c/2c/2b/7c2c2bc4e723d4e9751ccea52b9a8d5c.jpg';
                        break;
                    case 'Rain':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg'; 
                        break;
                    case 'Smoke':
                            weatherIconEle.src = 'https://i.pinimg.com/474x/9c/92/10/9c92102cb1006c5009e2224fcc4c6c73.jpg'; 
                            break;
                    case 'Clouds':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/44/f8/e6/44f8e64e846b4fe5f5b27f752b672de3.jpg'; 
                        break;
                    case 'Snow':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/1b/51/c9/1b51c9cc72f8f1f9d57b2f2022e0c999.jpg'; 
                        break;
                    case 'Thunderstorm':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/4e/de/90/4ede90a3a6e48c65d104392361fdf7dd.jpg'; 
                        break;
                        
                }
            })
            .catch(() => {
                alert("Please enter a valid city");
            });
            
            inputEle.value = ""; 
    }
};
