WEB APP REACT + VITE
Gallerie d'image / de tableau d'art antique

Pas de route API, fichier local pour les images

Aside à gauche avec la barre de recherche, fonction de tri et le bouton d'envoi.
Et à droite, la section principale avec la présentation de tout les tableaux, après le tri effectué ou non.


Les fonctionnalités dans cette app (useState, useEffect, onChange) :
- état des images useState(nom, type, artiste)
Gestion des états des images avec 
- recherche et tri des images avec onChange
Permettre à l'utilisateur de filtrer les images en fonction de certain critères
- sélection des images useState
Permettre à l'utilisateur de cliquer directement sur image qui veut afficher dans la modal
- parcourir (suivant, précédent) useState
Parcourir les images simplement pour découvrir la gallerie

Composants: 
- composant de recherche : ArtSearch
- composant des tableaux : ArtMain
- composant grille d'images : ArtGrid
- composant agrandissement : ArtModal

à faire 
ajouter éléments HTML (input, select) dans le rendu App.jsx
lier les setters(handler) aux champs de saisie
-pour le composant ArtGrid : afficher les images sous formes de grille
-utiliser les props pour filtrer la liste puis les passer à ArtGrid
-ArtModal le créer et le lier avec l'image sélectionnée de la grille(ArtGrid)
