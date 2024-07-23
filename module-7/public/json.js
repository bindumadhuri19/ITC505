const movieData = `{
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Science Fiction",
    "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
}`;

// Parse JSON string to JavaScript object
const movie = JSON.parse(movieData);

// Access data
console.log(`Title: ${movie.title}`);
console.log(`Director: ${movie.director}`);
console.log(`Year: ${movie.year}`);
console.log(`Genre: ${movie.genre}`);
console.log(`Actors: ${movie.actors.join(', ')}`);

// Convert JavaScript object back to JSON string
const jsonString = JSON.stringify(movie, null, 2);
console.log(jsonString);
