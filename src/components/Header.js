import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-paperclip" />
          <h1>
            <strong>LOREM I PSUJEM</strong>
            <br />
          </h1>
          <p>
            Generator koji ste svi trazili!
            <br />
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Opsuj
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
