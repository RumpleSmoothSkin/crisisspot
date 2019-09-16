<!DOCTYPE html>
<html>
  <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140791395-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-140791395-1');
        </script>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <title>CrisisSpot.com - Collaborative Incident Mapping</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="pagestyle.css" />
    <script src="controlpanel.js">     /* initialize custom control panel */   </script>
    <script src="markers.js">          /* handle placing and retrieving markers */ </script>
    <script src="jquery-3.2.1.min.js"> /* get some JQuery all up in here */ </script>
  </head>
    <body>
            <script>
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '.' + mm + '.' + yyyy;
            </script>
        
    <div id="header">
        <div style="width: 60%; font-size: 90%;">
            Map fires and floods in your area!<br>
            Click icon once to place.<br>
            On map, click again to delete. 
        </div>
        <img src="crisislogo_transparent3.png" style="position: absolute; right: 8px; top: 2px;">
    </div>
    <div id="map">
    <script>
      var uluru = {lat: 29.629425, lng: -43.742514};
      var map;
      var marker; 
      // var placeoldmarker;
      var setmarker;
      var UniversalMarkerArray = [];

      function initMap() 
      {
        map = new google.maps.Map(document.getElementById('map'), {center: uluru, zoom: 2, mapTypeId: "hybrid"});
      
        // var marker = new google.maps.Marker({position: uluru, map: map});
            
        var ControlDivCreator = document.createElement('div');
        var mainControl = new ControlPanel(ControlDivCreator, map);

        ControlDivCreator.index = 1;
        // stick custom control panel to left-center side
        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(ControlDivCreator);
   
        var timer = setInterval(function()
        {
                populateMarkers(map);
        }, 500); 
   
      }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=WRITEYOURKEYHERE&callback=initMap"></script>
    </div>
    <div id="footer" style="background-color: black; color: white; text-align: center;">info (at) crisisspot.com - this site is in ALPHA</div>
    </body>
</html>