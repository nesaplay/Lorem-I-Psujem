import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const GET_METADATA = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

class Header extends React.Component {
  smoothScroll = () => {
    const sectionOne = document.getElementById("one")

    window.scrollTo({
      top: sectionOne.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }
  render() {
    return (
      <StaticQuery
        query={GET_METADATA}
        render={data => (
          <section id="header">
            <div className="inner">
              <span className="icon major fa-paperclip" />
              <h1>
                <strong>{data.site.siteMetadata.title}</strong>
                <br />
              </h1>
              <p>
                {data.site.siteMetadata.description}
                <br />
              </p>
              <ul className="actions">
                <li>
                  <span onClick={this.smoothScroll} className="button scrolly">
                    Opsuj
                  </span>
                </li>
              </ul>
            </div>
          </section>
        )}
      />
    )
  }
}

export default Header
