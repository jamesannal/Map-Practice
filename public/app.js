var initialize = function(){
  var center = {lat: 48.4284, lng:-123.3656};
  var zoomer = 10;
  var container = document.getElementById('main-map');
  var mainmap = new MapWrapper(center, zoomer, container);

  mainmap.addMarker(center);
  mainmap.addClickEvent();
}

window.onload = initialize;