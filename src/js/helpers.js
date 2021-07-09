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
  if (country.name !== country.nativeName) {
    country.nativeName = `(${country.nativeName})`;
  }
  
  content.append(`
    <div class="col col-6 country-col" id="country" data-country="${country.name}">
      <div class="country-card">
          <div class="country-flag">
              <img
                alt="${country.name} flag"
                src="${country.flag}"
              >
          </div>

          <div class="country-info">
            <h5>
              ${country.name + ' ' + country.nativeName}
            </h5>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
          </div>
      </div>
    </div>
  `);

  country.nativeName = '';
}
