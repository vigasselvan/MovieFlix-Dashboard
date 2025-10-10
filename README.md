# MovieFlix

Website to know information about a movie fast.

**Technologies**: React.JS, HTML/CSS, chart.JS and vite.

**Key Features**: Instant search response of movie, Movie data are shown in chart format, Searched Movie data are stored locally, Dark mode and External website link (IMDb).

**Challenges faced and Learnings**: To use env variables in vite and vercel, and To parse and filter out the data needed.

***Live***: [Click me](https://movieflix-dashboard-rho.vercel.app/)

## How to setpup website

1. Run - `git clone git@github.com:vigasselvan/MovieFlix-Dashboard.git`
2. Run - `cd MovieFlix-Dashboard`
3. Run - `npm install`
4. Run - `npm run dev`
5. go to [http://localhost:5173/](http://localhost:5173/) in your browser to see the website locally.
6. create .env file inside root folder and add key as "VITE_API_URL" and value as your api key received from OMDb API, e.g: `VITE_API_URL:66197789`