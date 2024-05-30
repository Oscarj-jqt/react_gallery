import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ArtGrid from '../src/components/ArtGrid';
import ArtBox from '../src/components/ArtBox';
import artworks from './artworks';
import './App.css'

function App() {
  
  //selectedArtwork c'est l'œuvre sélectionnée à partir de la grille
  //null affiche rien, au début rien est sélectionné
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleImageSelect = (imageId) => {
    const selectedArtwork = artworks.find(artwork => artwork.id === imageId);
    setSelectedArtwork(selectedArtwork);
  };

  // On fait le rendu de l'app avec les composants box et grid

  return (
    <div className="app">
      <ArtSearch />
      <ArtBox artwork={selectedArtwork} />
      <ArtGrid artworks={artworks} onSelect={handleImageSelect} />
    </div>
  );
}

export default App