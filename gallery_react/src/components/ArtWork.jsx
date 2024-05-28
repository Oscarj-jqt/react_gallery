

function ArtWork ({name, artist, year, type, country, artwork}) {
    return (
        //Page principale de la maquette
        <div className = "art-box">
            <div className="artwork-header">
                <div className="artwork-group">
                    <span className="artwork-name">{name}</span>
                    <span className="artwork-artist">{artist}</span>
                </div>
            </div>
            <img className="artwork-image" src = {artwork} alt="image"/>



            
        </div>
    )
}