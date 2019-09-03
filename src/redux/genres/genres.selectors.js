export const initialState = {
  isPending: false,
  genres: [],
  error: ''
}

function getNameFromId(genres, id) {
  if (genres) {
    const genre = genres.genres.find(el => el.id === id)
    return genre ? genre.name : ''
  }
  return null
}


export async function getGenreIds(genres, movies) {
  const genreNames = []
  if (movies && genres) {
    await movies.results.forEach(movie => movie.genre_ids.forEach(
      id => genreNames.push(getNameFromId(genres, id))
    ))
  }
  return genreNames
}
