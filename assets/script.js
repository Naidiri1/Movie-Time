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
    let searchedValue = inputEl.value
getApiData(searchedValue)

})

function getApiData(input) {
    fetch(`http://www.omdbapi.com/?t=${input}&apikey=b7e371de`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            movieInfo = data
       console.log(data);
       displayMovieData();
        })

}


function displayMovieData (){

//title goes at the header 

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
plotEl.textContent = `Plot: ${movieInfo.plot}`
castEl.textContent = `Cast: ${movieInfo.actors}`;
languageEl.textContent = `Language: ${movieInfo.language}`;
runTimeEl.textContent = `Run Time: ${movieInfo.runtime}`;
genreEl.textContent = `Genre: ${movieInfo.genre}`;
releasedEl.textContent = `Realesed Date: ${movieInfo.released}` 
//ratingEl.textContent = `Rating (Roten Tomatoes): ${movieInfo.ratings[1].value}`
boxOfficeEl.textContent = `Box Office: ${movieInfo.boxOffice}`

    // We list the div that we want to append the element to
        movieDisplay.append(plotEl);
        movieDisplay.append(castEl);
        movieDisplay.append(languageEl);
        movieDisplay.append(runTimeEl);
        movieDisplay.append(genreEl);
        movieDisplay.append(ratingEl);
        movieDisplay.append(boxOfficeEl);
        
}