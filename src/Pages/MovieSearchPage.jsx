import React from 'react'

import AppBar from '../components/organisms/AppBar/AppBar'
import MovieSearchTemplate from '../components/Templates/MovieSearchTemplate/MovieSearchTemplate'
import MovieGrid from '../containers/MovieGrid.container'

const TranscriptionsPage = () => (
  <MovieSearchTemplate
    header={<AppBar />}
  >
    <MovieGrid />
  </MovieSearchTemplate>
)

export default TranscriptionsPage
