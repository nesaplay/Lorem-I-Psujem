import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'

class Homepage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={this.props.data.site.siteMetadata.title} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Generator ide ovde
                  <br />
                  >>>>>>>>>>>>>>>>>
                </h2>
              </header>
              <p>
                Smesan tekst zasto da se koristi i lagane instrukcije.
                Smesan tekst zasto da se koristi i lagane instrukcije.
                Smesan tekst zasto da se koristi i lagane instrukcije.
                Smesan tekst zasto da se koristi i lagane instrukcije.
                Smesan tekst zasto da se koristi i lagane instrukcije.
                Smesan tekst zasto da se koristi i lagane instrukcije.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Homepage
