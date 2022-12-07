var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var youtubeApi = "AIzaSyD29ZYd_OaPzWVG9E4nHQq4dGU03yc_OFY";
//  https://www.googleapis.com/youtube/v3
var inputEl = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var movieDisplay = document.getElementById("movie-information");
var movieInfo;
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    let searchedValue = inputEl.value;
getApiData(searchedValue)

})

function getApiData(input) {
    fetch(`http://www.omdbapi.com/?t=${input}&apikey=b7e371de`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            movieInfo = data;
       console.log(data);
       displayMovieData();
       saveStorage();
        })

}


function displayMovieData (){

//var title = document.getElementById("title")
//var movietitle = text.textContent(inputEl);
//title.append(movietitle);
//title goes at the header 
movieDisplay.innerHTML = "";

//elements for language, cast, runtime, gender, rating, released date, box office,
var plotEl =document.createElement("p")
var castEl = document.createElement("p");
var languageEl = document.createElement("p");
var runTimeEl = document.createElement("p");
var genreEl = document.createElement("p");
var releasedEl = document.createElement("p");
var ratingEl = document.createElement("p");
var boxOfficeEl = document.createElement("p");

   //adding elements to collect the data 
plotEl.textContent = `Plot: ${movieInfo.Plot}`
castEl.textContent = `Cast: ${movieInfo.Actors}`;
languageEl.textContent = `Language: ${movieInfo.Language}`;
runTimeEl.textContent = `Run Time: ${movieInfo.Runtime}`;
genreEl.textContent = `Genre: ${movieInfo.Genre}`;
releasedEl.textContent = `Realesed Date: ${movieInfo.Released}` 
//ratingEl.textContent = `Rating (Roten Tomatoes): ${movieInfo.ratings[1].value}`
boxOfficeEl.textContent = `Box Office: ${movieInfo.BoxOffice}`

    // We list the div that we want to append the element to
        movieDisplay.append(plotEl);
        movieDisplay.append(castEl);
        movieDisplay.append(languageEl);
        movieDisplay.append(runTimeEl);
        movieDisplay.append(genreEl);
        movieDisplay.append(ratingEl);
        movieDisplay.append(boxOfficeEl);
        
}


// save to local storage 
function saveStorage() {
    // Save movie to local storages
    var movietitle = [];
    // Look code quiz local storage to save multiple movies
    if (localStorage.getItem('recentSearches')) {
       movietitle = movietitle.concat(localStorage.getItem('recentSearches'))
    } else {
       movietitle = [];
    }
    movietitle.push(movieInfo.Title);
    localStorage.setItem("recentSearches", movietitle);
}

function displayStorage() {
    // Get localStorage "recentSearches"
    // Loop the array of pastSearches and create a button for each one
    // In the loop, append each button to the UL element
}

// Add an event listener to your UL element that uses event delegation to run pastSearches