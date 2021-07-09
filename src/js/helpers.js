/**
 * @param {String} uri 
 * @param {String} method 
 * @param {CallableFunction} callable
 * @return {any}
 */
function fetchApi(uri, method = "GET", callable) {
  $.ajax({
    url: "https://restcountries.eu/rest/v2" + uri,
    method: method
  }).done(function (response) {
    callable(response);
  });
}