let countriesContent = $("#countries-content");

fetchApi("/all", "get", function (response) {
	response.forEach((country) => {
		addCardCountry(countriesContent, country)
	});
});
