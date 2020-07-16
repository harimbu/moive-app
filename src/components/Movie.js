import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, year, rating, genres, summary, poster }) => {
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                    year,
                    rating,
                    genres,
                    summary,
                    poster
                }
            }}>
            <div className='movie'>
                <div className='movie__poster'>
                    <img src={poster} alt={title} />
                </div>
                <div className='movie__info'>
                    <h2>{title.substr(0, 20)}</h2>
                    <p>{year}</p>
                    <p>{rating}</p>
                    <p className='genres'>
                        {genres.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </p>
                    <p>{summary.substr(0, 200) + '......'}</p>
                </div>
            </div>
        </Link>
    );
};

export default Movie;
