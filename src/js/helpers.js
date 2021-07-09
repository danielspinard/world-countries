function fetchApi(uri, method = "GET") {
  $.ajax({
    url: "https://restcountries.eu/rest/v2" + uri,
    method: method
  }).done(function (response) {
  });
}