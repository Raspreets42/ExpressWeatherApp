const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const weathericon = document.getElementById('weathericon');
const citylocation = document.getElementById('location');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const minmaxtemp = document.getElementById('minmaxtemp');
const today = new Date();
const time = today.toLocaleTimeString();
const dy = today.getDay();
const mnth = today.getMonth();
const dt = today.getDate();
const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const day = dayArray[dy];
const month = monthArray[mnth];

const searchingInfo = async (e) => {
    e.preventDefault();
    let cityValue = cityname.value;
    if (cityValue === "") { 
        Swal.fire("Opps !" , "You didn't entered any City Name");
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=0c5f988426906ee934b6985dc96b39c8`;
            const response = await fetch(url);
            const data = await response.json();
            const ArrayData = [data];
            citylocation.innerHTML = `<i class="fas fa-street-view"></i>${ArrayData[0].name}, ${ArrayData[0].sys.country}`;
            temp.innerHTML = `${((ArrayData[0].main.temp) - 273.15).toFixed(2)}&deg;C`;
            date.innerHTML = `${day} | ${month} - ${dt} | ${time}`;
            minmaxtemp.innerHTML = `Min ${((ArrayData[0].main.temp_min) - 273.15).toFixed(2)}&deg;C | Max ${((ArrayData[0].main.temp_max) - 273.15).toFixed(2)}&deg;C`;
            const tempStatus = ArrayData[0].weather[0].main;
            if (tempStatus == "Sunny" || tempStatus == "Clear") {
                weathericon.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempStatus == "Clouds") {
                weathericon.innerHTML = "<i class='fas fa-cloud' style='color: #fff;'></i>";
            }
            else if (tempStatus == "Rain") {
                weathericon.innerHTML = "<i class='fas fa-cloud-rain' style='color: #0366fc;'></i>";
            }
            else {
                weathericon.innerHTML = "<i class='fas fa-cloud' style='color: #fff;'></i>";
            }
        } catch {
            Swal.fire("Warning !" , "Please enter the City Name Properly");
        }
    }
}
submitbtn.addEventListener('click', searchingInfo);