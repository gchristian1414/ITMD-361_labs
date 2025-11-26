function initMap() {

    var el = document.getElementById('canvas');
    var myLocation = new google.maps.LatLng(41.83826366824573, -87.62849112842889);
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    }


    var myMap = new google.maps.Map(el, mapOptions);
    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/pikachu.gif',
    });

    var contentString = `
    <h2 style="color:black !important;">
        This is Stuart Field, <br>
        Home of the Illinois Tech Men's Soccer Team
    </h2>
`;

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(myMap, marker);
    });

    // feature #1
    google.maps.event.addListener(myMap, "click", function (event) {
        var newMarker = new google.maps.Marker({
            position: event.latLng,
            map: myMap,
            // feature #2
            draggable: true
        });

        // feature #3
        google.maps.event.addListener(newMarker, "click", function () {
            var Latitude = event.latLng.lat();
            var Longitude = event.latLng.lng();
            alert(
                "Marker Coordinates:\n" +
                "Latitude: " + Latitude + "\n" +
                "Longitude: " + Longitude

            );
        });
    });
};

google.maps.event.addDomListener(window, 'load', initMap);

document.addEventListener("DOMContentLoaded", () => {
    const questionBtn = document.getElementById("questionButton");

    if (questionBtn) {
        questionBtn.addEventListener("click", () => {
            alert("If you have questions, contact me at: cgarcia26@hawk.illinoistech.edu")
        });
    }
});