# CrisisSpot
Collaborative Incident Mapping
www.crisisspot.com

Welcome and thank you for your interest in CrisisSpot. This is a volunteer project where we will be building a public tool for mapping of disaster and security related crises. 

At the moment (22.09.2019) we have a barely functioning prototype, designed only to show what the general concept is supposed to be. If you are aware of an incident (right now only fires and floods are available), click on the icon in the toolbar and then on the map to place it. The icon should show in real time for other users. Click on the icon on the map to delete.

Setup/Install

The site functions on a very simple algorithm. To initialize:
1. Set up a MySQL database, the structure is available in the db_dump.db file.
2. Update the DB info in the dbinfo.php file. 
3. You will need your own Google Maps API key. Replace it in the index.php file where it says WRITEYOURKEYHERE.

Problems/Issues

The realtime effect on the map is strictly an illusion at the moment, based on a timer that updates the map every half second. The way the function is supposed to work, is that it checks if the global array of markers has been updated, and if so places the additional markers where they need to be. When a marker is removed, the global array is ammended -- however the map is only updated using a javascript refresh call when the user deletes a marker. If someone other than you (the user) deletes a marker, it does not properly remove it from the map. 

The entire function needs to be rewritten, perhaps using sockets.io, for realtime updating and removing of the markers on the map by any user on the site. 

Contact Info

This project was started by Elad Yakobowicz and is open to all. Inquiries may be sent to crisisspot@gmail.com. 
