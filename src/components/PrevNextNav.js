import React from 'react'
import PrevLink from './PrevLink'
import NextLink from './NextLink'

export default ({ previous, next }) => (
  <ul
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      listStyle: 'none',
      padding: 0,
    }}
  >
    {previous && <PrevLink previous={previous} />}
    {next && <NextLink next={next} />}
  </ul>
)
