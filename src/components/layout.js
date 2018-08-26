import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import SiteHeader from './SiteHeader'

class Template extends React.Component {
  render() {
    const { location, metadata, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let headerStyle
    if (location.pathname === rootPath) {
      headerStyle = {
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }
    } else {
      headerStyle = {
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
        marginBottom: rhythm(-1),
      }
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <SiteHeader headerStyle={headerStyle} title={metadata.title} />
        {children}
      </div>
    )
  }
}

export default Template
