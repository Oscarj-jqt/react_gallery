import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ArtGrid from './ArtGrid';
import ArtBox from './ArtBox';
import './App.css'

function App() {
  // On déclare les propriétés, [getter, setter]
  // les getters dans le ArtBox
  // les setters seront appelés dans le ArtGrid
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState();
  const [type, setType] = useState();
  const [country, setCountry] = useState();
  const [artwork, setArtwork] = useState();
  //selectedArtwork c'est l'œuvre sélectionnée à partir de la grille
  //null affiche rien, au début rien est sélectionné
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const artworks = [
    {
      id: 1,
      name: "Le Penseur",
      artist: "Auguste Rodin",
      year: 1902,
      type: "Sculpture",
      country: "France",
      artwork: "/path/to/le-penseur.jpg"
    },
    {
      id: 2,
      name: "L'Ange Déchu",
      artist: "Alexandre Cabanel",
      year: 1847,
      type: "Peinture",
      country: "France",
      artwork: "/path/to/l-ange-dechu.jpg"
    },
    {
      id: 3,
      name: "La Création d'Adam",
      artist: "Michel-Ange",
      year: "1508-1512",
      type: "Peinture murale",
      country: "Italie",
      artwork: "/path/to/la-creation-d-adam.jpg"
    },
    {
      id: 4,
      name: "La Chute de Babylone",
      artist: "John Martin",
      year: 1819,
      type: "Peinture",
      country: "Royaume-Uni",
      artwork: "/path/to/la-chute-de-babylone.jpg"
    },
    {
      id: 5,
      name: "La Mort de Socrate",
      artist: "Jacques-Louis David",
      year: 1787,
      type: "Peinture",
      country: "France",
      artwork: "/path/to/la-mort-de-socrate.jpg"
    },
    {
      id: 6,
      name: "La Pietà",
      artist: "Michel-Ange",
      year: "1498-1499",
      type: "Sculpture",
      country: "Italie",
      artwork: "/path/to/la-pieta.jpg"
    }
  ];
  

  //On crée les méthodes, les settters qui permettront la modification des propriétés pour la recherche et le filtrage
  // quand l'utilisateur tape au champ, set est appelée

  //le nom du tableau
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  //le nom de l'artiste
  const artistChangeHandler = (event) => {
    setArtist(event.target.value)
  }

  //le type (peinture, sculpture)
  const typeChangeHandler = (event) => {
    setType(event.target.value)
  }

  //l'année de l'œvre
  const yearChangeHandler = (event) => {
    setYear(event.target.value)
  }

  //le pays d'origine
  const countryChangeHandler = (event) => {
    setCountry(event.target.value)
  }

  // l'image, le lien
  const artworkChangeHandler = (url) => {
    setArtwork(url)
  }
  // On fait le rendu de l'app avec les composants box et grid

  return (
    <div className="app">
      <ArtBox artwork={selectedArtwork} />
      <ArtGrid artworks={artworks} onSelect={setSelectedArtwork} />
      
    </div>
  );
}

export default App
