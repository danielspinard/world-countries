/**
 * @param {String} uri 
 * @param {String} method 
 * @param {CallableFunction} callable 
 */
function fetchApi(uri, method = "GET", callable) {
  $.ajax({
    url: "https://restcountries.eu/rest/v2" + uri,
    method: method
  }).done(function (response) {
    callable(response);
  });
}

/**
 * @param {Element} content 
 * @param {Object} country 
 */
function addCardCountry(content, country) {
}
