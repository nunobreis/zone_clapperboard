import React from 'react'

import AppBar from '../components/organisms/AppBar/AppBar'
import MovieSearchTemplate from '../components/Templates/MovieSearchTemplate/MovieSearchTemplate'
import SearchBar from '../components/molecules/SearchBar/SearchBar'
import MovieGrid from '../containers/MovieGrid.container'

const TranscriptionsPage = () => (
  <MovieSearchTemplate
    header={<AppBar />}
    searchBar={<SearchBar />}
  >
    <MovieGrid />
  </MovieSearchTemplate>
)

export default TranscriptionsPage
