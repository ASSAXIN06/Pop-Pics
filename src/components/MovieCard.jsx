import React from "react"

function MovieCard ({movie}){

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                
            </div>
        </div>
    )

}

export default MovieCard