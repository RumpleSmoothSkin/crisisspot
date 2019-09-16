function ControlPanel(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        // controlUI.style.position = 'absolute';
        // controlUI.style.zindex = '10';
        controlUI.style.opacity = '0.6';
        controlUI.style.marginLeft = '15px';
        controlUI.style.height = '240px';
        controlUI.style.width = '80px';
        controlUI.style.backgroundColor = 'black';
        controlUI.style.border = '0px solid #fff';
        // not relevant controlUI.style.borderRadius = '3px';
        // not relevant controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.textAlign = 'center';
        // controlUI.title = 'The control panel will go here, maybe it will open up';
        controlDiv.appendChild(controlUI);

        // Set button #1 (water)
        var controlButton1 = document.createElement('img');
        controlButton1.src = "images/water_button.png";
        controlButton1.style.width = '30px';
        controlButton1.style.height = '30px';
        // controlButton1.style.color = 'white';
        // controlButton1.style.fontFamily = 'Roboto,Arial,sans-serif';
        // controlButton1.style.fontSize = '16px';
        // controlButton1.style.lineHeight = '38px';
        // controlButton1.style.paddingLeft = '5px';
        // controlButton1.style.paddingRight = '5px';
        // controlButton1.innerHTML = 'test';
        controlUI.appendChild(controlButton1);
        
        // Set button #2 (fire)
        var controlButton2 = document.createElement('img');
        controlButton2.src = "images/fire_button.png";
        controlButton2.style.width = '30px';
        controlButton2.style.height = '30px';
        controlUI.appendChild(controlButton2);

        // Setup the click event listeners for button #1 (water)
        var CB1listener = controlButton1.addEventListener('click', function(event)
            {
                var type = "water";
                var AddListenerPlaceMarker = google.maps.event.addListener(map, 'click', function(event)
                    {
                        if (setMarkers(map, event, type, "images/water_button.png") == true)
                        {
                            controlButton1.removeEventListener('click', function(event){});
                            google.maps.event.removeListener(AddListenerPlaceMarker);
                        }
                    });
            
                
            });
            
        var CB2listener = controlButton2.addEventListener('click', function(event)
            {
                var type = "fire";
                var AddListenerPlaceMarker = google.maps.event.addListener(map, 'click', function(event)
                    {
                        if (setMarkers(map, event, type, "images/fire_button.png") == true)
                        {
                            controlButton2.removeEventListener('click', function(event){});
                            google.maps.event.removeListener(AddListenerPlaceMarker);
                        }
                    });
            
                
            });

      }