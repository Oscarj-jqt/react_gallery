import React, { useRef } from 'react';
import artworks from '../artworks';

function ArtSearch({ onSearch }) {
  // On déclare les références
  const nameRef = useRef(null);
  const artistRef = useRef(null);
  const typeRef = useRef(null);
  const yearRef = useRef(null);
  const countryRef = useRef(null);
  const imageRef = useRef(null);

  const handleSearch = () => {
    // On récupère la valeur saisie par l'utilisateur dans le DOM
    const searchCriteria = {
      name: nameRef.current.value,
      artist: artistRef.current.value,
      type: typeRef.current.value,
      year: yearRef.current.value,
      country: countryRef.current.value,
    };
    
    
    // Appel de la fonction onSearch avec les critères de recherche
    onSearch(searchCriteria);
  };

  return (
    <div className="art-search">
      <input ref={nameRef} type="text" placeholder="Nom de l'œuvre" />
      <input ref={artistRef} type="text" placeholder="Artiste" />
      <input ref={typeRef} type="text" placeholder="Tableau, sculpture" />
      <input ref={yearRef} type="text" placeholder="Date" />
      <input ref={countryRef} type="text" placeholder="Pays" />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
}

export default ArtSearch;
