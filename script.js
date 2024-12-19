const filmsList = document.querySelector("#films");
const movieTitle = document.querySelector("#movie-title");
const moviePoster = document.querySelector("#movie-poster");
const movieDescription = document.querySelector("#movie-description");
const movieRuntime = document.querySelector("#movie-runtime");
const movieShowtime = document.querySelector("#movie-showtime");
const movieTickets = document.querySelector("#movie-tickets");
const buyTicketButton = document.querySelector("#buy-ticket");

const API_URL = "http://localhost:3000/films";

// Fetch all movies and populate the sidebar
fetch(API_URL)
  .then((response) => response.json())
  .then((movies) => {
    filmsList.innerHTML = ""; // Clear placeholder
    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      li.classList.add("film", "item");
      li.addEventListener("click", () => loadMovieDetails(movie));
      filmsList.appendChild(li);
    });
    loadMovieDetails(movies[0]); // Load the first movie's details by default
  });

// Load details of a single movie
function loadMovieDetails(movie) {
  movieTitle.textContent = movie.title;
  moviePoster.src = movie.poster;
  movieDescription.textContent = movie.description;
  movieRuntime.textContent = movie.runtime;
  movieShowtime.textContent = movie.showtime;
  const availableTickets = movie.capacity - movie.tickets_sold;
  movieTickets.textContent = availableTickets;

  // Update button behavior
  buyTicketButton.disabled = availableTickets <= 0;
  buyTicketButton.textContent = availableTickets > 0 ? "Buy Ticket" : "Sold Out";

  buyTicketButton.onclick = () => {
    if (availableTickets > 0) {
      movie.tickets_sold++;
      movieTickets.textContent = movie.capacity - movie.tickets_sold;

      // Update Sold Out status
      if (movie.capacity - movie.tickets_sold === 0) {
        buyTicketButton.disabled = true;
        buyTicketButton.textContent = "Sold Out";
      }
    }
  };
}