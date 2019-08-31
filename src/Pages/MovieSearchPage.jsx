import React from 'react'

import AppBar from '../components/organisms/AppBar/AppBar'
import MovieSearchTemplate from '../components/Templates/MovieSearchTemplate/MovieSearchTemplate'
import SearchBar from '../components/molecules/SearchBar/SearchBar'

const TranscriptionsPage = () => (
  <MovieSearchTemplate
    header={<AppBar />}
    searchBar={<SearchBar />}
  >
    Hello world
  </MovieSearchTemplate>
)

export default TranscriptionsPage
