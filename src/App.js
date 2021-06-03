import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import RowPost from "./components/RowPost";
import {
  originals,
  actions,
  adventure,
  animation,
  comedy,
  crime,
  documentary,
  drama,
  family,
  fantacy,
  history,
  horror,
  music,
  mystery,
  romance,
  science,
  tvMovie,
  thriller,
  war,
  western,
  upcoming
} from "./urls";
import "./App.css";

function App() {
  return (
    <div className="app">
      <React.StrictMode >
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={originals} />
      <RowPost title="Action" isSmall url={actions} />
      <RowPost title="Adventure" isSmall url={adventure} />
      <RowPost title="Action" isSmall url={animation} />
      <RowPost title="Comedy" isSmall url={comedy} />
      <RowPost title="Crime" isSmall url={crime} />
      <RowPost title="Documentary" isSmall url={documentary} />
      <RowPost title="Drama" isSmall url={drama} />
      <RowPost title="Family" isSmall url={family} />
      <RowPost title="Fantacy" isSmall url={fantacy} />
      <RowPost title="History" isSmall url={history} />
      <RowPost title="Horror" isSmall url={horror} />
      <RowPost title="Music" isSmall url={music} />
      <RowPost title="Mystery" isSmall url={mystery} />
      <RowPost title="Romance" isSmall url={romance} />
      <RowPost title="Science Fiction" isSmall url={science} />
      <RowPost title="TV Movie" isSmall url={tvMovie} />
      <RowPost title="Thriller" isSmall url={thriller} />
      <RowPost title="War" isSmall url={war} />
      <RowPost title="Western" isSmall url={western} />
      <RowPost title="Upcoming" isSmall url={upcoming} />
      </React.StrictMode>
    </div>
  );
}

export default App;
