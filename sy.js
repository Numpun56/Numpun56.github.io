//alt + 9ตามด้วย 6 ฝั่ง numpad
// const + ตัวแปร แบบพิมพ์ใหญ่
//alt + 3 ตามด้วย 6 ฝั่ง numpad $
//alt +9+1 =[]
//alt +5+9 =;
//alt +4+0 =()
//alt 1+2+3 ={}
//ALT 34 ""
// ALT 63 ?

const WeatherForm = document.querySelector(".WeatherForm");
const EnterCity = document.querySelector(".CityInput");
const Card = document.querySelector(".Card");
const apiKey = "c05d0e23e57d5f53cdefc203b2f2de58"
            
WeatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const City = EnterCity.value;

    if(City){
        try{
            const WheaterData = await GetWheaterData(City);
            DisplayWheaterInfo(WheaterData);
        }
        catch(eror){
            console.error(eror);
            DisplayError(error);
        }
    }
    else{
        DisplayError("Please Enter a City")
    }
});

async function GetWheaterData(City){

    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}`;

    const response = await fetch(APIurl);

    if(!response.ok){
        throw new Error("Can't Fetch Weather Data")
    }
    return await response.json();
}

function DisplayWheaterInfo(Data){

    const {name : City, 
           main: {temp , humidity}, 
           weather: [{description, id}]} = Data;

           Card.textContent = "";
           Card.style.display = "flex"

           const CityDisplay = document.createElement("h1");
           const TempDisplay = document.createElement("p");
           const HumidityDisplay = document.createElement("p");
           const DescDisplay = document.createElement("p");
           const WeatherEmoji = document.createElement("p");

           CityDisplay.textContent = City;
           CityDisplay.classList.add("CityDisplay")

           TempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(2)} °C`
           TempDisplay.classList.add("TempDisplay")
           
           HumidityDisplay.textContent = `Humidity: ${humidity}%` 
           HumidityDisplay.classList.add("HumidityDisplay")

           DescDisplay.textContent = description;
           DescDisplay.classList.add("DescDisplay")

           WeatherEmoji.textContent = DisplayWheaterEmojo(id);
           WeatherEmoji.classList.add("Emoji")

           Card.appendChild(CityDisplay);
           Card.appendChild(TempDisplay);
           Card.appendChild(HumidityDisplay);
           Card.appendChild(DescDisplay);
           Card.appendChild(WeatherEmoji);
}

function DisplayWheaterEmojo(WeatherId){

    switch(true){
        case (WeatherId >= 200 && WeatherId < 300):
            return "⛈";
        case (WeatherId >= 300 && WeatherId < 400):
            return "🌧";
        case (WeatherId >= 500 && WeatherId < 600):
            return "🌧";
        case (WeatherId >= 600 && WeatherId < 700):
            return "❄️";
        case (WeatherId >= 700 && WeatherId < 800):
            return "💨";
        case (WeatherId === 800):
            return "☀️";
        case (WeatherId >= 801 && WeatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function DisplayError(message){
    
    const ErrorDisplay = document.createElement("p");
    ErrorDisplay.textContent = message;
    ErrorDisplay.classList.add("ErrorDisplay");

    Card.textContent = "";
    Card.style.display = "flex"
    Card.appendChild(ErrorDisplay);
}

    

