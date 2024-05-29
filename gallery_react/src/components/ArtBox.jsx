//Composant qui agit après l'élément sélectionné à partir de l'autre composant ArtGrid
function ArtBox ({name, artist, year, type, country, artwork}) {
    return (
        //Page principale de la maquette
        <div className = "art-box">
            <div className="artbox-header">
                <div className="artbox-first">
                    <span className="artbox-name">{name}</span>
                    <span className="artbox-artist">{artist}</span>
                </div>
                <div className="artbox-main">
                <img className="artbox-image" src={artwork} alt={name} />
                </div>
                <div className="artbox-second">
                    <span className="artbox-type">{type}</span>
                    <span className="artbox-year">{year}</span>
                    <span className="artbox-country">{country}</span>
                </div>
            </div>
        </div>
    )
}