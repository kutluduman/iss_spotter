const { fetchMyIP, fetchGeoCords, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchGeoCords('174.116.51.125', (error, coordinate) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Coordinate:' , coordinate);
});

const cordinatesObj = { latitude: '45.4215', longitude: '75.6972' };

fetchISSFlyOverTimes(cordinatesObj, (error,data) => {

  if (error) {
    console.log(error);
    return;
  }
  console.log(data)
});