var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var youtubeApi = "AIzaSyD29ZYd_OaPzWVG9E4nHQq4dGU03yc_OFY";
//  https://www.googleapis.com/youtube/v3
//  https://www.googleapis.com/youtube/v3
var inputEl = document.getElementById("searchInput");
var searchButton = document.getElementById("search-button");
var movieDisplay = document.getElementById("movie-information");
var moviesListed =document.getElementById("button-list");
var movieInfo;

function redirect(indexSearchedMovie) {
    if (!indexSearchedMovie) {
        return;
    } else {

        window.location.href = `./results.html?v=${indexSearchedMovie}`;

    }
}

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    let searchedValue = inputEl.value;
    redirect(searchedValue);
    // add the button to the local storage list 
    // create the url and redirect to the results page 
    saveStorage()
})





// save to local storage 
function saveStorage(moviesSearched) {
   
    var movies = JSON.parse(localStorage.getItem("recentSearches"));
    if(!movies){
        movies = [];
    }
    movies.push(inputEl.value)
   localStorage.setItem("recentSearches", JSON.stringify(movies));
}


function displayMovies(){

    var movies = JSON.parse(localStorage.getItem("recentSearches"));  
    if(!movies){
        movies = [];
    }
 
    for (let index = 0; index < movies.length; index++) {
        var movieUrl = document.createElement("a");
        movieUrl.textContent = movies[index];
        movieUrl.setAttribute("href",  `./results.html?v=${movies[index]}`)
        moviesListed.append(movieUrl);     
    }}
    displayMovies()

 
