fetchApi("/all", "get", function (response) {
    response.forEach((country, index) => {
        console.log(`
            region: ${country.region}
            name: ${country.name}
            nativeName: ${country.nativeName}
            capital: ${country.capital}
            population: ${country.population}
            area: ${country.area}
            flag: ${country.flag}
        `);
    });
});
