//STEP 01
var movies = ["The Pursuit of Happyness", "The Help", "Forest gump", "Jumanji", "Inside Out"];
window.console.log(movies[1]);

//STEP 02

var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
window.console.log(movies[0]);


//STEP 03

var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies.splice(2,0,"Harry Potter");
window.console.log(movies.length);


//STEP 04

var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
delete movies[0];
window.console.log(movies);


//STEP 05
var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 06
var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

var item;
for (item in movies) {
     window.console.log(movies[item]);
}


//STEP 07
var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

var item;
for (item in movies.sort()) {
        window.console.log(movies[item]);
}

//STEP 08
var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

window.console.log("Movies I like:\n\n");
var favitem;
for (favitem in movies) {
        window.console.log(movies[favitem]);
}

var leastFavMovies = [];
leastFavMovies[0] = "twelve";
leastFavMovies[1] = "Serving Sara";
leastFavMovies[2] = "The darkness";

window.console.log("\n\nMovies I regret watching:\n\n");
var leastfavitem;
for (leastfavitem in leastFavMovies) {
        window.console.log(leastFavMovies[leastfavitem]);
}

//STEP 09

var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

var leastFavMovies = [];
leastFavMovies[0] = "twelve";
leastFavMovies[1] = "Serving Sara";
leastFavMovies[2] = "The darkness";

movies = movies.concat(leastFavMovies);
var item;
for (item in movies.reverse().sort()) {
        window.console.log(movies[item]);
    }


//STEP 10

var movies = [];
movies[0] = "The Pursuit of Happyness";
movies[1] = "The Help";
movies[2] = "Forest gump";
movies[3] = "Jumanji";
movies[4] = "Inside Out";
movies[5] = "Harry Potter";
movies[6] = "The Twilight Saga";

var leastFavMovies = [];
leastFavMovies[0] = "twelve";
leastFavMovies[1] = "Serving Sara";
leastFavMovies[2] = "The darkness";

movies = movies.concat(leastFavMovies);
window.console.log(movies.reverse().sort().pop());

