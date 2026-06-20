function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            var user = data.results[0];
            var fullName = user.name.title + " " + user.name.first + " " + user.name.last;
            document.getElementById("user-img").src = user.picture.large;
            // to do : update for name and gender 
            document.getElementById("user-name").innerText = fullName;
            document.getElementById("user-gender").innerText = user.gender;
        })
        .catch(function (error){
            console.log("Error" + error);
        });
}