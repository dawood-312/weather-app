
function getW() {
    let CityName = document.querySelector("#input-box").value;
    //  use axios http 
    axios.get(`http://api.weatherapi.com/v1/current.json?key=8adad95a877d4bd0baf133346230909&q=${CityName}&aqi=yes`)
        .then(function (response) {
            // handle success
            let weather = response.data;
            console.log(weather);
            let temp_c = weather.current.temp_c;
            let temp_f = weather.current.temp_f;
            let humidity = weather.current.humidity;
            let cName = weather.location.name;
            let country = weather.location.country;
            document.querySelector("#weatherReport").innerHTML = `
    <div class="container d-flex h-75 w-100">
        <div class="align">
            <div class="card1">
                <h1>${temp_c}&deg;C <br> ${temp_f}&deg;F</h1>
                <h3>Temperature</h3>
            </div>
            <div class="card2">
                <h1>${humidity}%</h1>
                <h3>Humidity</h3>
            </div>
            <div class="card3">
                <h1>${cName}</h1>
                <h3>Location</h3>
            </div>
            <div class="card4">
                <h1>${country}</h1>
                <h3>Country</h3>
            </div>
        </div>
    </div>
            `;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

