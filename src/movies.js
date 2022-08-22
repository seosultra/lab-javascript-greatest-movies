// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // get the value of directors from each object insde the array
  // let directors = movies.map((movies) => {
  //   return movies.director;
  // });
  return moviesArray.map(function (movies) {
    return movies.director;
  });
  //return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let counter = 0;
  let stevenDrama = moviesArray.filter((movies) => {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    ) {
      //return movies.title;
      return counter++;
    }
  });
  //return stevenDrama.length;
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  average =
    moviesArray.reduce(function (accumulator, score) {
      if (!score.score) return accumulator;
      return accumulator + score.score;
    }, 0) / moviesArray.length;
  return average.toFixed(2) * 1;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movies) {
    return movies.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = [...movies];
  // sortedMovies.push(movies[year].sort((a, b) => a.year - b.year));
  // return sortedMovies;
  sortedMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortedArr = arr.slice().sort(function (a, b) {
    return a["title"].localeCompare(b["title"]);
  });

  if (sortedArr.length < 20) {
    return sortedArr.map(function (movie) {
      return movie.title;
    });
  }

  return sortedArr.slice(0, 20).map(function (movie) {
    return movie.title;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
