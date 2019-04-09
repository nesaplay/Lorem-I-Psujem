import React from 'react'

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
              <span onClick={this.smoothScroll} className="button scrolly">
                Opsuj
              </span>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
