	function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    var map = new google.maps.Map(document.getElementById("hotel_map"), mapOptions);
        
    // Multiple Markers
    var markers = [
        ['Disneyland Paris', 48.872248, 2.775808],
        ['Disneyland Hotel', 48.870473, 2.779504]
    ];
                        
    // Setup the different icons and shadows
    var iconURLPrefix = 'images/';
    
    var icons = [
      iconURLPrefix + 'google-map-marker.png',
      iconURLPrefix + 'hotel-map-marker.png'
    ]
    var icons_length = icons.length;
                        
            
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    var iconCounter = 0;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon : icons[iconCounter]
        });
        
        iconCounter++;
        
       

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}


google.maps.event.addDomListener(window, 'load', initialize); 

