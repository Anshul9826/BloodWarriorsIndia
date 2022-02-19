var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
  params: {latlng: '40.714224,-73.96145', language: 'en'},
  headers: {
    'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
    'x-rapidapi-key': 'a57e5c6adamsh6b1cac7f2126daap11d1bajsnf641b7d694c7'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});