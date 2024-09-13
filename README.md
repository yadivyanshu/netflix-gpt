# netflix-gpt

1. Use VPN to make tmdb api's work.

## Steps

- Create the basic setup using command "npx create-react-app netflix-gpt"
- Setup tailwind css
- Header
- Routing of /browse and /
- Login/Signup form
- Form validation
- Firebase setup and deployment
- Authentication
- Work on react-redux
  - Created redux store with userSlice
- Implemented Signout feature
  - Update displayName and profile icon
- Fixed the navigation bug
- Unsubscribed to onAuthStateChanged callback
- Register on TMDB
- Get data for Now Playing movies
- Custom hook for nowPlayingMovies
- Create movie slice
- Update store with movie data
- Fetch data for Trailer video
- Update store with trailer data
- Embedded the you tube video and make it autoplay and mute
- Build Secondary component
- Build movie list
- Build movie card
- GPT Search Page
- GPT Search Bar
- Multi-language Feature in Gpt page ⭐
- Setup Open AI Api call function
- Gpt Search API Call
- Fetched gptMoviesSuggestions from TMDB
- Added TMDB data into gptSlice store
- Resused Movie List component to make movie suggestion container
- Added .env file
- Memoization

## Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
  - NetflixGPT
    - Search Bar
    - Movie Suggestions
