console.log("Hello parth");

const API_KEY = "ef37f22e82d102725e59e33fb573c214";

async function showWeather(){
    // let latitude = 15.3333; 
    // let logitude = 74.0833;
    let city = "goa";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    console.log("Weather data :-> " , data);

    // let newPara = document.newElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} C`

    // document.body.appendChild(newPara);
}
