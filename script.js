const filmList = document.querySelector("#films");
const movieHeading = document.querySelector("#movie-title");
const moviePoster = document.querySelector("#movie-poster");
const movieExplanation = document.querySelector("#movie-description");
const movieRunclock = document.querySelector("#movie-runtime");
const movieShowclock = document.querySelector("#movie-showtime");
const movieTicket = document.querySelector("#movie-tickets");
const buyTicketButt = document.querySelector("#buy-ticket");

const API_URL = "http://localhost:3000/films";

// This section fetches all movies and populates the sidebar
fetch(API_URL)
  .then((response) => response.json())
  .then((movies) => {
    filmList.innerHTML = ""; // Clear placeholder
    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      li.classList.add("film", "item");
      li.addEventListener("click", () => loadMovieDetails(movie));
      filmList.appendChild(li);
    });
    loadMovieDetails(movies[0]); // Load the first movie's details by default
  });

// This section loads the details of a single movie
function loadMovieDetails(movie) {
  movieHeading.textContent = movie.title;
  moviePoster.src = movie.poster;
  movieExplanation.textContent = movie.description;
  movieRunclock.textContent = movie.runtime;
  movieShowclock.textContent = movie.showtime;
  const availableTickets = movie.capacity - movie.tickets_sold;
  movieTicket.textContent = availableTickets;

  // This section updates button behavior
  buyTicketButt.disabled = availableTickets <= 0;
  buyTicketButt.textContent = availableTickets > 0 ? "Buy Ticket" : "Sold Out";

  buyTicketButt.onclick = () => {
    if (availableTickets > 0) {
      movie.tickets_sold++;
      movieTicket.textContent = movie.capacity - movie.tickets_sold;

      // This section updates the sold out status
      if (movie.capacity - movie.tickets_sold === 0) {
        buyTicketButt.disabled = true;
        buyTicketButt.textContent = "Sold Out";
      }
    }
  };
}
