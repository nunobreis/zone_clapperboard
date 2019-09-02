import React from 'react'
import useCollapse from 'react-collapsed'

import AppBar from '../components/organisms/AppBar/AppBar'
import MovieSearchTemplate from '../components/Templates/MovieSearchTemplate/MovieSearchTemplate'
import MovieGrid from '../containers/MovieGrid.container'
import GenreFilter from '../containers/GenreFilter.container'
import Button from '../components/atoms/Button/Button'

const MovieSearchPage = () => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse()
  return (
    <MovieSearchTemplate
    header={<AppBar />}
    >
      <div>
        <Button {...getToggleProps()}>
          {isOpen ? 'Collapse Filters' : 'Expand Filters'}
        </Button>
        <section {...getCollapseProps()}>
          <GenreFilter />
        </section>
      </div>
      <MovieGrid />
    </MovieSearchTemplate>
  )
}

export default MovieSearchPage
