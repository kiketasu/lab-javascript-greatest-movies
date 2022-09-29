// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArr = moviesArray.map((pelicula) => pelicula.director);
  return directorArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaSteven = moviesArray.filter(
    (pelicula) => pelicula.director === "Steven Spielberg"
  );
  const drama = dramaSteven.filter((pelicula) =>
    pelicula.genre.includes("Drama")
  );
  return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoreArr = moviesArray.map((pelicula) => {
    if (!pelicula.score) pelicula.score = 0;
    return pelicula.score;
  });
  const sumaScore = scoreArr.reduce((a, b) => a + b);
  const finalScore = Math.round((sumaScore / scoreArr.length) * 100) / 100;
  return finalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((pelicula) =>
    pelicula.genre.includes("Drama")
  );
  const scoreDrama = dramaMovies.map((pelicula) => pelicula.score);
  const sumaScore = scoreDrama.reduce((a, b) => a + b);
  const finalScore = Math.round((sumaScore / scoreDrama.length) * 100) / 100;
  return finalScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const cloneArr = moviesArray.map(pelicula => pelicula)
    const byYear = cloneArr.sort((a, b) => {
        if(a.year > b.year){
            return 1
        } else if (a.year < b.year){
            return -1
        } else {
        if(a.title > b.title){
            return 1;
        } else if (a.title < b.title){
            return -1;
        } else {
            return 0;
        }
    }});
    return byYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArr = moviesArray.map(pelicula => pelicula.title)
    const alph = titleArr.sort()
    const primeras = alph.slice(0,20)
    return primeras;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    moviesClone.values(moviesArray);
    console.log(moviesClone)
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
