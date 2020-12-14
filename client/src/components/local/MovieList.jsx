/*
Principal author: Tomoaki Morita
*/
import React, { useEffect, useState } from 'react';

import MovieListItem from './MovieListItem';
import AddMovie from './AddMovie';

import List from '@material-ui/core/List';

const MovieList = () => {
    let id = 0;
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem("movies"))
        ||
        [{ id: 1, name: 'Batman', year: 2012 },
        { id: 2, name: 'Ironman', year: 2012 }
        ]
    )

    useEffect(() => {
    })

    const addMovie = (item) => {
        item[id] = id++;
        id=id++;
        setMovies([
            ...movies, item
        ]);
    }

    const removeMovie = (id) => {
        console.log(movies);
        const newList = movies.filter(item => item.id !== id);
        setMovies(newList);
    }

    const editMovie = (id) => {
        const newList = movies.map(item => {
            if (item.id !== id) {
                return item;
            } else {
                return { ...item }
            }
        });
        setMovies(newList);
    }

    return (
        <div>
        
        <AddMovie
            addMovie={addMovie}
            >
        </AddMovie>
            <List className="list-group">
                {movies.map(movie => (
                    <MovieListItem
                        id={movie.id}
                        key={movie.id}
                        item={movie}
                        editMovie={editMovie}
                        removeMovie={removeMovie}
                    />
                ))}
        </List>
        </div>
    )
}

export default MovieList;