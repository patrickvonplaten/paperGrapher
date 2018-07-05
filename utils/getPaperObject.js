
const getArXivPaperObject = () => {
  var xhr = new XMLHttpRequest();
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=796d6ae51449b3531c9a4df53a4f6413";
  xhr.open("GET", url, true);
  xhr.send();
  var self = this

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      const arXivRequest= JSON.parse(xhr.responseText);

      self.setState({ temperature: temperature });
      self.setState({ weatherDescription: weatherDescription });
    }
  }
}


module.exports = {
  getArXivPaperObject : getArXivPaperObject,
}