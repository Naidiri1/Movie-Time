var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var inputEl = document.getElementById("searchInput");
var searchButton = document.getElementById("search-button");
var movieDisplay = document.getElementById("movie-information");
var moviesListed = document.getElementById("button-list");
var movieInfo;

// function to Once the user inserts a movie name we redirect them to the results page 
function redirect(indexSearchedMovie) {
    if (!indexSearchedMovie) {
        return;
    } else {
        window.location.href = `./results.html?v=${indexSearchedMovie}`;
    }
}

// save to local storage 
function saveStorage() {

    var movies = JSON.parse(localStorage.getItem("recentSearches"));
    if (!movies) {
        movies = [];
    }
    movies.push(inputEl.value);
    localStorage.setItem("recentSearches", JSON.stringify(movies));
}

//Display the recent searches on the main page on a list link 
function displayMovies() {

    var movies = JSON.parse(localStorage.getItem("recentSearches"));
    if (!movies) {
        movies = [];
    }

    for (let index = 0; index < movies.length; index++) {
        var movieUrl = document.createElement("a");
        var liEl = document.createElement('li');
        movieUrl.textContent = movies[index];
        movieUrl.setAttribute("href", `./results.html?v=${movies[index]}`)
        liEl.append(movieUrl);
        moviesListed.append(liEl);
    }
};
// once the button is clicked it redirects to results page 
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    let searchedValue = inputEl.value;
    redirect(searchedValue);
    saveStorage();
});

displayMovies();
