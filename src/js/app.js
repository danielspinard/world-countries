let app_window = $(window);
let scroll_wolds = 25;
let content = $("#country-content").empty();

app_window.scroll(function() {
    if(app_window.scrollTop() == $(document).height() - app_window.height()) {
        scroll_wolds = scroll_wolds + 10;
    }
});

fetchApi("/all", "get", function (response) {
    response.forEach((country, index) => {
        addCardCountry(content, country);
    });
});
