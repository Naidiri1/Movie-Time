var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var OMDbApi = "b7e371de";
var Url = "http://www.omdbapi.com/?t=joker&apikey=k83ue93";
var indexInputEl = document.getElementById("searchInput");
var movieDisplay = document.getElementById("movie-information");
var youtubeVid = document.getElementById('existing-iframe-example');
var movieInfo;
var url_string = document.URL;
var url = new URL(url_string);
let movieURL;
var inputV = url.searchParams.get("v");
var newYoutubeApi = "AIzaSyDaicjUWtw26ivrZKElo2VsgIxrKpLlZLQ";
var youtubeFetchUrl = `https://www.googleapis.com/youtube/v3/search?q=${inputV}_trailer&maxResults=2&key=${newYoutubeApi}`

//Calling youtube api data
fetch(youtubeFetchUrl)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    movieURL = data.items[0].id.videoId
    youtubeVid.src = `https://www.youtube.com/embed/${movieURL}?enablejsapi=1`;
  })


// youtube code
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//Display video 
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
  });
}

// Getting Data from OMBb 
function getApiData(input) {
  fetch(`http://www.omdbapi.com/?t=${input}&apikey=b7e371de`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      movieInfo = data;
      displayMovieData();
    })
}
// Displaying the OMBb data on results
function displayMovieData() {

  var title = document.getElementById("searchedMovie");
  title.textContent = movieInfo.Title;
  movieDisplay.innerHTML = "";

  //elements for language, cast, runtime, gender, rating, released date, box office,
  var plotEl = document.createElement("p");
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
//Calling the data based on the users input 
getApiData(inputV);
