# **Flatdango** 🎥  

Flatdango is a dynamic single-page application (SPA) that allows users to browse movies, view their details, and purchase tickets. The project uses a `json-server` to simulate a backend and provides an interactive user experience to manage movie tickets.  

## Getting Started

To get started with Flatdango, follow these steps:

### Prerequisites
Ensure you have the following installed on your computer:
- **Node.js** (for running the `json-server`)
- A modern web browser

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Jeremy-Bosire/SDF-FT12BP1Rm-Wk3-Code-Challenge.git

2. Navigate into the project directory:
   ```bash
   cd SDF-FT12BP1Rm-Wk3-Code-Challenge

3. Install the dependencies:
   ```bash
   npm install

4. Start the JSON Server to run the mock API:
   ```bash
   json-server --watch db.json


## Features

- **AI-driven Support**: MaternaLight uses AI to provide supportive conversations for women experiencing prenatal and postnatal depression.
- **Chatbot Interface**: A simple, user-friendly chatbot interface to interact with the AI.
- **Emotional Health Focus**: Focuses on mental and emotional support, providing helpful conversations during challenging times.
- **Easy Integration**: Can be easily integrated into your web applications or services.
- **Responsive Design**: The application is designed to work on both desktop and mobile devices.
- **Scalable**: Built to scale with additional features such as personalized content and support.

## Technologies Used

- **JSON Server**: A tool to quickly set up a REST API for testing and prototyping, used to handle mock data and simulate a backend.
- **HTML**: The standard markup language used to create the structure of the web pages.
- **CSS**: Used for styling and ensuring the app is visually appealing and responsive.
- **JavaScript**: A programming language used to handle logic, interaction, and integration within the web pages.

## Future Enhancements

- **Persist ticket purchases**: Update ticket sales on the server using a PATCH request to ensure that the number of available tickets reflects the purchases made.
  
- **Indicate sold-out movies in the menu**: Add a class or style to movies that are fully booked, so users can easily see which movies are no longer available.

- **Delete movies**: Allow admins to remove movies from the list, giving them control over the content displayed on the platform.

- **Responsive design**: Improve the UI to be fully responsive, ensuring the application works seamlessly across different devices and screen sizes.

## License

This project is licensed under the MIT License.
