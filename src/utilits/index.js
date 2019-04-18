export const getGenres = (genres, genresIds) => {
    const converted = [];

    genres.forEach(genre => {
        if(genresIds.includes(genre.id)) 
            converted.push(genre.name);
    });

    return converted;
}