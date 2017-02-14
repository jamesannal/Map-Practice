var MapWrapper = function(coords, zoomer, container){

    this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoomer
  });
}


MapWrapper.prototype = {
  addMarker: function(coords) {
    var infowindow = new google.maps.InfoWindow({
      content: "<p><b><u>Victoria</b></u> is the capital city of the" + "Canadian province of British Columbia, Canada, and is" + "located on the southern tip of Vancouver Island off" + "Canada's Pacific coast. The city has a population of about" +  "80,017, while the metropolitan area of Greater Victoria," + "has a population of 344,615, making it the 15th most" +  "populous Canadian urban region."
      }); 

    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    marker.addListener('click', function(){
      infowindow.open(this.googleMap, marker);
    }.bind(this));
    
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      // console.log(event);
      // console.log(event.latLng.lat());
      // console.log(event.latLng.lng());
      var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(position);
    }.bind(this));
  },

  setCenter: function(coords) {
    this.googleMap.setCenter(coords);
  }
}
