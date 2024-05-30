// ArtSearch.jsx
import React, { useState } from 'react';

function ArtSearch() {
    //On déclare les getters et setters pour la fonction de recherche
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");

  // On déclare les méthodes 
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const artistChangeHandler = (event) => {
    setArtist(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };

  const imageChangeHandler = (url) => {
    setImage(url);
  };

  return (
    <div className="art-search">
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={nameChangeHandler}
      />
      <input
        type="text"
        placeholder="Artiste"
        value={artist}
        onChange={artistChangeHandler}
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={typeChangeHandler}
      />
      <input
        type="text"
        placeholder="Année"
        value={year}
        onChange={yearChangeHandler}
      />
      <input
        type="text"
        placeholder="Pays"
        value={country}
        onChange={countryChangeHandler}
      />
      <input
        type="text"
        placeholder="URL de l'image"
        value={image}
        onChange={(e) => imageChangeHandler(e.target.value)}
      />
    </div>
  );
}

export default ArtSearch;
