var initialize = function(){
  var center = {lat: 48.4284, lng:-123.3656};
  var zoomer = 10;
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoomer, container);

  mainmap.addMarker(center);
  mainmap.addClickEvent();

  var merlin = document.querySelector('#merlin');
  merlin.onclick = function() {
    var coords = { lat: 32.3078, lng: -64.7505}
    mainmap.addMarker(coords);
    mainmap.setCenter(coords);
  }
}

window.onload = initialize;