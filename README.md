# Netflix Clone

A Netflix-inspired web application built with React that replicates the core browsing experience. It fetches real movie and TV show data from The Movie Database (TMDB) API and displays it across categorised rows, closely mirroring the Netflix UI.

---

## About

This project was built to practise React component architecture, third-party API integration, and SCSS-based styling. The UI includes a hero banner, categorised content rows, and routing between pages — all styled to match the look and feel of Netflix.

---

## Features

- Fetches live movie and TV show data from the TMDB API
- Hero banner with a featured title on the homepage
- Content rows organised by category (trending, top rated, by genre, etc.)
- Client-side navigation using React Router
- Responsive layout styled with SCSS
- Closely mirrors the Netflix UI structure and visual design

---

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| UI Library | React 19                |
| Routing    | React Router DOM v7     |
| Styling    | SCSS (Sass)             |
| API        | TMDB (The Movie Database) |
| Bundler    | Create React App        |
| Language   | JavaScript              |

---

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- A free TMDB API key — sign up at [themoviedb.org](https://www.themoviedb.org/)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ayushhh11/netflix.git
   cd netflix
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure your TMDB API key

   Create a `.env` file in the root directory and add your key:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Open your browser at

   ```
   http://localhost:3000
   ```

---

## Project Structure

```
netflix/
├── public/               # Static assets and index.html
├── src/
│   ├── components/       # Reusable UI components (Banner, Row, Nav, etc.)
│   ├── App.js            # Root component and routing
│   └── index.js          # Application entry point
├── package.json
└── .gitignore
```

---

## Key Concepts Demonstrated

- Third-party REST API integration with TMDB
- Dynamic rendering of content based on API response data
- Component composition and reuse in React
- SCSS for structured, maintainable styling
- Client-side routing with React Router DOM v7

---

## Author

Ayush Singh Tomar  
[LinkedIn](https://www.linkedin.com/in/ayush-singh-tomar-8a2693236) · [GitHub](https://github.com/ayushhh11)
