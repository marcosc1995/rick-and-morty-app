import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);
  return (
    <div className="App">
      <NavBar brand={"Rick and Morty App"}></NavBar>
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onNext={onNext}
          onPrevious={onPrevious}
        ></Pagination>
        <Characters characters={characters}></Characters>
        <Pagination
          prev={info.prev}
          next={info.next}
          onNext={onNext}
          onPrevious={onPrevious}
        ></Pagination>
      </div>
    </div>
  );
}

export default App;
