import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // On déclare les propriétés, 
  
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState();
  const [type, setType] = useState();
  const [country, setCountry] = useState();
  const [artwork, setArtwork] = useState();

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
  // On va maintenant 

  return (
    <>
      
    </>
  )
}

export default App
