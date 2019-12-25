$(document).ready(function () {
    
    // Get Location 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/316649?apikey=BQRon163jBaC4txGkZcXDa5cwdBuU8nm&lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.DailyForecasts[0].Temperature.Maximum.Value);
        var temp2=parseInt((temp-32)*5/9);
        var desc = data.DailyForecasts[0].Day.IconPhrase;
        var icon = icon;

        $('#city').html(city);
        $('#temp').html(temp2);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});