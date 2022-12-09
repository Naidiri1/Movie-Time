var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var youtubeApi = "AIzaSyD29ZYd_OaPzWVG9E4nHQq4dGU03yc_OFY";
//  https://www.googleapis.com/youtube/v3
//  https://www.googleapis.com/youtube/v3
var indexInputEl = document.getElementById("searchInput");
var movieDisplay = document.getElementById("movie-information");

var movieInfo;
var url_string = document.URL
var url = new URL(url_string);
var inputV = url.searchParams.get("v");



function getApiData(input) {
    fetch(`http://www.omdbapi.com/?t=${input}&apikey=b7e371de`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            movieInfo = data;
       console.log(data);
       displayMovieData();
        })

}


function displayMovieData (){

var title = document.getElementById("searchedMovie");
title.textContent = movieInfo.Title;
movieDisplay.innerHTML = "";

//elements for language, cast, runtime, gender, rating, released date, box office,
var plotEl =document.createElement("p");
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
ratingEl.textContent = `Rating (Roten Tomatoes): ${movieInfo.Ratings[1].Value}`;
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



 getApiData(inputV);