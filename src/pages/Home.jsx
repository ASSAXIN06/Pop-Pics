import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "John Wick", release_date: "2021"},
        {id: 3, title: "John Wick", release_date: "2022"},
        {id: 4, title: "John Wick", release_date: "2023"}
    ]

const handleSearch = () => {}

    return <div className="home">

        <form className="search-form" onSubmit={handleSearch}>
            <input
                type= "text"
                placeholder= "Search for movies..."
                className="search-input"></input>
            <button className="search-button" type="submit">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>

    </div>
}

export default Home;