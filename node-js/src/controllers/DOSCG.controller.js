import { Client } from "@googlemaps/google-maps-services-js";
import config from 'config'
const {
  apiKey
} = config.get('google')

exports.findXYZ = (req, res) => {
  const arr = ["X", "Y", 5, 9, 15, 23, "Z"];
  let value;
  value = 23 - 15;
  res.json({
    value: 0
  })
}

exports.findBC = (req, res) => {
  const A = 21;
  const B = 23 - A;
  const C = -21 - A;

  res.json({
    A,
    B,
    C
  })
}

exports.findDirection = (req, res) => {
  // const googleapis = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
  const client = new Client({

  });
  client
    .directions({
      params: {
        origin: "13.7244416,100.3529157",
        destination: "Bangkok",
        mode: "driving",
        key: apiKey
      },
      timeout: 1000 // milliseconds
    })
    .then(r => {
      // console.log(r.data.results[0].elevation);
      console.log(r.data.results);
      res.json({
        data: r.data.results
      })
    })
    .catch(e => {
      console.log(e);
      res.json({
        data: e
      })
    });
}

// function initMap() {
//   var directionsService = new google.maps.DirectionsService;
//   var directionsDisplay = new google.maps.DirectionsRenderer;
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 7,
//     center: {lat: 41.85, lng: -87.65}
//   });
//   directionsDisplay.setMap(map);

//   var onChangeHandler = function() {
//     calculateAndDisplayRoute(directionsService, directionsDisplay);
//   };
//   document.getElementById('start').addEventListener('change', onChangeHandler);
//   document.getElementById('end').addEventListener('change', onChangeHandler);
// }

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   directionsService.route({
//     origin: document.getElementById('start').value,
//     destination: document.getElementById('end').value,
//     travelMode: 'DRIVING'
//   }, function(response, status) {
//     if (status === 'OK') {
//       directionsDisplay.setDirections(response);
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
// }
