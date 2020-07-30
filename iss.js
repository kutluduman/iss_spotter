const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const url = `https://api.ipify.org?format=json`;

const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API

  request(url, (error,response, body) => {

    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    console.log('Error: ', error);
    console.log('Response: ', response && response.statusCode);
    console.log('Body: ', body);
    const ipText = JSON.parse(body); // in order to treat like object to receive values, first I have to parse it
    console.log('IP: ', ipText.ip); // then I can reach the value with the key

  });

};

module.exports = { fetchMyIP };