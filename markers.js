function setMarkers(map, event, markertype, iconimage) {
        
        marker = new google.maps.Marker({
                position: event.latLng,
                map: map,
                icon: iconimage
                // shape: shape,
            });
        
        // UniversalMarkerArray.push(marker);    
            
        var latlng = marker.getPosition();
        var url = 'process_stuff.php?lat=' + latlng.lat() + '&lng=' + latlng.lng() + '&type=' + markertype;

        downloadUrl(url, function(data, responseCode) {});
        
            return true;
        
        // Adds markers to the map.
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        // This marker is 20 pixels wide by 32 pixels high.
        // The origin for this image is (0, 0).
        // The anchor for this image is the base of the flagpole at (0, 32).
                /*
            var image = {
              url: iconimage,
              size: new google.maps.Size(30, 30),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 30)
            };
                */
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
                /*
            var shape = {
              coords: [1, 1, 1, 30, 30, 30, 30, 1],
              type: 'poly'
            };
                */
      }
      
function populateMarkers(map)
    {
        downloadUrl('export.php', function(data, responseCode) {
                var xml = data.responseXML;
                var newmarkers = xml.documentElement.getElementsByTagName('marker');

                    // alert(UniversalMarkerArray);

                    var g = 0;
                
                    Array.prototype.forEach.call(newmarkers, function(markerElem) 
                        {
                      var id1 = markerElem.getAttribute('id');
                      var name1 = markerElem.getAttribute('name');
                      var address1 = markerElem.getAttribute('address');
                      var type1 = markerElem.getAttribute('type');
                      var point1 = new google.maps.LatLng(
                          parseFloat(markerElem.getAttribute('lat')),
                          parseFloat(markerElem.getAttribute('lng')));
                      var which_icon = 'images/' + type1 + '_button.png';
                      
                      // alert(UniversalMarkerArray[g] + "|" + id1);
                      
                      if (UniversalMarkerArray[g] == id1)
                      {
                         
                      }
                      else
                      {
                          var placeoldmarker = new google.maps.Marker(
                            {
                            map: map,
                            position:   point1,
                            icon:       which_icon,
                            id:         id1
                            });
                            
                          google.maps.event.addListener(placeoldmarker, 'click', function () {

                                var contentString = '<div>'+
                                    /* '<input type="hidden" id="id" value="'+id1+'" />'+
                                    '<input type="hidden" id="name" value="'+name1+'" />'+
                                    '<input type="hidden" id="address" value="'+address1+'" />'+
                                    '<input type="hidden" id="type" value="'+type1+'" />'+
                                    '<input type="hidden" id="point" value="'+point1+'" />'+ */
                                    '<input type="button" value="Delete Marker #'+id1+'?" onclick="deleteMarker(' + id1 + '); document.location.reload(true);" />'+
                                    '</div>';
                                
                                var infowindow = new google.maps.InfoWindow({
                                  content: contentString
                                });
                                infowindow.open(map, placeoldmarker);
                            
                            });
                      
                            UniversalMarkerArray.push(id1);
                            

                      }
                            
                      g++;
                    
                    });

        });

        return true;
    }

function deleteMarker(id2) 
      {
        /*
        var id2 = document.getElementById('id').value;
        var name2 = document.getElementById('name').value;
        var address2 = document.getElementById('address').value;
        var type2 = document.getElementById('type').value;
        var latlng2 = document.getElementById('point1').value
        */
        
        var url2 = 'delete_stuff.php?id=' + id2;
        downloadUrl(url2, function(data, responseCode) {});

        return true;
      }

function downloadUrl(url, callback)
      {
          
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest();

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }
      
function doNothing () 
      {
      }