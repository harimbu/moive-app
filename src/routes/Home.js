import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMoive() {
            const response = await axios.get(
                'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
            );
            const movies = response.data.data.movies;
            setMovies(movies);
        }
        getMoive();
    }, []);

    return (
        <ul className='App'>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Movie
                        id={movie.id}
                        poster={movie.large_cover_image}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        genres={movie.genres}
                        summary={movie.summary}
                    />
                </li>
            ))}
        </ul>
    );
}

export default App;
