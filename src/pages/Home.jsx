import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "2004"},
        {id: 3, title: "Soldier", release_date: "1998"},
        {id: 4, title: "Hero", release_date: "2002"}
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return <div className="home">

        <form className="search-form" onSubmit={handleSearch}>
            <input
                type= "text"
                placeholder= "Search for movies..."
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
                className="search-input"/>
            <button className="search-button" type="submit">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
               movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>

    </div>
}

export default Home;