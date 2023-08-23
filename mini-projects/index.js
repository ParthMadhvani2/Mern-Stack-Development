console.log("Hello parth");

const API_KEY = "ef37f22e82d102725e59e33fb573c214";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {

try {
    let city = "goa";
    // here await keyword is used to slow down the process that after the data comes froms the server then only next step gets start till that wait
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    console.log("Weather data:-> " , data);

    renderWeatherInfo(data);
}
catch(err) {
    //handle the error here
}
//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric

}

async function getCustomWeatherDetails() {
try{
    let latitude = 22.5471282;
    let longitude = 72.9259788;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data);
}
catch(err) {
    console.log("Errror Found" , err);
}

}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Support");
    }
}

// function made to find current location
function showPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
}