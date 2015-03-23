jQuery(document).ready(function(){
if (Modernizr.geolocation) {
        $("#get_position").click(getLocation);
    } else {
       alert("No soportado");
    }
});

function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    $("#location").html("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
    $("#map").html("<img src='"+img_url+"'>");

}