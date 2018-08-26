import React from 'react'
import urljoin from 'urljoin'
import config from '../../data/SiteConfig'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={config.userAvatar}
          alt={config.userName}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          {config.userName} lives in {config.userLocation}. You should follow{' '}
          {config.userPronouns[1]} on Twitter at{' '}
          <a
            href={urljoin('https://twitter.com/', config.userTwitter)}
            target="_blank"
          >
            {config.userTwitter}
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
