import React from 'react';

const Detail = ({ location }) => {
    console.log(location.state.title);
    const poster = location.state.poster;
    const title = location.state.title;
    const year = location.state.year;
    const genres = location.state.genres;
    const summary = location.state.summary;
    const rating = location.state.summary;

    return (
        <div className='movie_datail'>
            <div>
                <img src={poster} alt={title} />
            </div>
            <div>
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
    );
};

export default Detail;
