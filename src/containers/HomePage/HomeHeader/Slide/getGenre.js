export default (ids, genres) => {

    for(let i = 0; i < genres.length; i++) {

        if(ids[0] === genres[i].id) return genres[0].name;

    }

}