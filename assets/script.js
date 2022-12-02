var  OMDbApi= "b7e371de";
var youtubeApi = "AIzaSyD29ZYd_OaPzWVG9E4nHQq4dGU03yc_OFY";

var inputEl = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

// http://www.omdbapi.com/?apikey=[yourkey]&
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b7e371de")
.then(function (response) {
return response.json();
})

.then(function (data) {
    console.log(data);
})
.catch(function (error){
    console.log(error)
})
