import React from 'react';
import artworks from '../artworks';


function ArtGrid( { artworks, onSelect }) {
    return (
        <div className="art-grid">
            {/* On met les miniatures ici */}
            {/* Avec .map on parcourt le tableau d'objet artworks et on affiche juste les images */}
            {artworks.map((artwork) => (
                <div key={artwork.id} className="art-thumbnail" onClick={() => onSelect(artwork.image)}>
                    {/* onSelect est la fonction appelée quand on clic, elle récupère son id */}
                    {/* styliser cette classe en petit cadre d'une taille précise */}
                    <img src="{artwork.image" alt="{artwork.name}" />
                </div>
            ))}
        </div>
    ); 
}

export default ArtGrid;