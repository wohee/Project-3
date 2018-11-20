
function initMap(){
  var university= {lat: 37.630158, lng: 127.090543};
  var seongsudong = {lat: 37.548050, lng: 127.047668};
  var seoulforest = {lat: 37.545292, lng: 127.038521};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12, center: seongsudong
    }
  );

        
  var marker1 = new google.maps.Marker({
    position: university,
    map: map
  });
        
  var marker2 = new google.maps.Marker({
    position: seongsudong,
    map: map
  });
        
  var marker3 = new google.maps.Marker({
    position: seoulforest,
    map: map
  });
}