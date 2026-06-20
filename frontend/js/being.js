//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL ="https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar = document.getElementById("search-box");
var searchsuggestions = document.getElementById("search-suggestions");
//get user typed data
//use user typed data in he query in the API call
//Append all the search suggestions to div tag in UI
searchBar.addEventListener("input", function() {
    var query = searchBar.value.trim();
    console.log(query);
    fetchSuggestions(query);
});

function fetchSuggestions(query) {
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //console.log(data);
            displaySuggestions(data);
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });
 

function displaySuggestions(data) {
    var values = data.results;
    if(data.count == 0){
        searchsuggestions.innerHTML = "<div>No suggestions found</div>";
    }
    else{
        var htmlString = "";
        for(var i=0; i<values.length; i++){
            htmlString += "<div><span class='suggestion-item'>" + values[i].text + "</span></div>";
        }
        searchsuggestions.innerHTML = htmlString;   
    }
}
}