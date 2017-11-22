app.get("/geolocation",function(req,res,next){
  var tmp = "";
  const options = {
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBtLdMhgwM1UN5bRNt7OT1y5rvUQmhpbPM",
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: pos,
    json: true
  };
  request(options,function(err,response,body){
    tmp = body.location;
    console.log(body);
    res.render("cellid",tmp)
  })
})

function getOtherPos(){
  $.ajax({
    url: "/getdata",
    type: "post",
    data:{"event_id":temp.id,
          "email":temp.self.myEmail},
    success: function(result){
      addMarkers(result)
    }
  })
}

function addMarkers(allPos){
  for(var i = 0; i < markers.length; i++) {
    for(let j = 0;j < markers[i].length;j++){
      markers[i].setMap(null);
    }
  }
  markers = [];
  for(let i = 0;i < allPos.length;i++){
    markers[i] = [];
    for(let j = 0;j < allPos[i].position.length;j++){
      var marker = new google.maps.Marker({
        position: {lat: allPos[i].position[j].lat,lng: allPos[i].position[j].lng},
        label: allPos[i].name,
        map: map,
        opacity: (j + 1) / allPos[i].position.length
      })
      markers.push(marker);
    }
  }
  console.log("add marker success");
}

// var infoWindow = new google.maps.InfoWindow({map: map});
// infoWindow.setPosition(pos);
// infoWindow.setContent('Location found.');