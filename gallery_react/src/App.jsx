import React, { useState } from 'react';
import ArtGrid from './components/ArtGrid';
import ArtBox from './components/ArtBox';
import ArtSearch from './components/ArtSeach';
import artworks from './artworks';
import './styles.css';


function App() {
  //selectedArtwork c'est l'œuvre sélectionnée à partir de la grille
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  //la méthode pour sélectionner l'id de l'élément cliqué par le user
  //il va chercher cet id dans le tableau artworks
  const handleImageSelect = (imageId) => {
    const selectedArtwork = artworks.find(artwork => artwork.id === imageId);
    setSelectedArtwork(selectedArtwork);
  };

  //Méthode pour filtrer les œuvres avec la fonction .filter
  const handleSearch = (searchCriteria) => {
  // Utilise la méthode filter pour créer une nouvelle liste d'œuvres d'art filtrées
  const filtered = artworks.filter(artwork => {
 
  const matchesName = !searchCriteria.name || artwork.name.toLowerCase().includes(searchCriteria.name.toLowerCase());
  const matchesArtist = !searchCriteria.artist || artwork.artist.toLowerCase().includes(searchCriteria.artist.toLowerCase());
  const matchesType = !searchCriteria.type || artwork.type.toLowerCase().includes(searchCriteria.type.toLowerCase());
  const matchesYear = !searchCriteria.year || artwork.year.toString().includes(searchCriteria.year);
  const matchesCountry = !searchCriteria.country || artwork.country.toLowerCase().includes(searchCriteria.country.toLowerCase());
  const matchesImage = !searchCriteria.image || artwork.image.toLowerCase().includes(searchCriteria.image.toLowerCase());

  // Retourne true si toutes les vérifications sont vraies, ce qui signifie que l'œuvre d'art correspond aux critères
  return matchesName && matchesArtist && matchesType && matchesYear && matchesCountry && matchesImage;
  });

  // Met à jour l'état des œuvres d'art filtrées avec la nouvelle liste filtrée
  setFilteredArtworks(filtered);
};


  return (
    <div className="app">
      <div className="search-section">
        <ArtSearch onSearch={handleSearch} />
      </div>
      <div className="content-section">
        <div className="art-info">
          {selectedArtwork && (
            <div>
              <h1>{selectedArtwork.name}</h1>
              <h2>{selectedArtwork.artist}</h2>
            </div>
          )}
        </div>
        <div className="art-box">
          <ArtBox {...selectedArtwork} />
        </div>
        <div className="art-grid">
          <ArtGrid artworks={filteredArtworks} onSelect={handleImageSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
