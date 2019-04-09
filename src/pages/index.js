import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Lorem I Psujem'

    return (
      <Layout>
        <Helmet title={siteTitle} />

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

export default Homepage
