import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Row from './Row';
import Movies from './Movies';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Nav />
                <Banner />
                <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
              </React.Fragment>
            }
          />
          <Route path="/movies" element={<Movies title="Comedy Movies" fetchUrl={requests.fetchAll} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
