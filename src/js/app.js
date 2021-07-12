let countriesContent = $("#countries-content");

fetchApi("/all", "get", function (response) {
	response.forEach((country) => {
		addCardCountry(countriesContent, country)
	});
});

$(document).on("click", "#country", function () {
	let country = $(this).attr("data-country");

	fetchApi("/name/" + country, "get", function (response) {
		console.log(response);
	})
});
