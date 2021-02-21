let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete")  
  );

  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();

    if (!place.geometry) {
        // User did not select a prediction, reset the input field
        document.getElementById('autocomplete').placeholder = 'Search Location'
    } else {
        // Display details about the valid place
        //document.getElementById('details').innerHTML = place.name;
    }
}

