import { Link } from "gatsby"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../images/WMHD-Logo.png"

class Nav extends React.Component {
  state = {}

  componentDidMount(){
      let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
      let activeClassPadder = 'hidden';
      this.setState({ activeClass, activeClassPadder });
      if (this.props.home) {
        window.addEventListener('scroll', () => {
          let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
          let activeClassPadder = 'hidden';
          if (window.pageYOffset > window.innerHeight) {
            activeClass = 'navbar fixonscroll navbar-fixed-top navbar-inverse';
            activeClassPadder = '';
          }
          this.setState({ activeClass, activeClassPadder });
       });
      }
  }

  render() {
    let activeClass = this.state.activeClass;
    let activeClassPadder = this.state.activeClassPadder;

    return (
      <>
        { /* Navbar Begin */ }
        <nav className={activeClass} role="navigation" id="home-nav">
          <div className="container">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li className="visible-xs-block">
                  <Link to="/" className="brand"><img src={Logo} height="60px" alt="WMHD Logo" /></Link>
                </li>
                <li class="dropdown">
                <a href="/about" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><AnchorLink to="/about#current">Current </AnchorLink> </li>
                    <li><AnchorLink to="/about#history">History </AnchorLink> </li>
                  </ul>
                </li>
                <li><a href="/Services">Services</a></li>
                <li className="hidden-xs">
                  <Link to="/" className="brand"><img src={Logo} alt="WMHD Logo" /></Link>
                </li>
                <li><a href="https://www.mixcloud.com/wmhdonlineradio/">Archive</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">Rental/DJ Requests</a></li>
              </ul>{ /* /.nav */ }
            </div>{ /*/.nav-collapse */ }
          </div>{ /*/.container */ }
        </nav>{ /*/.navbar */ }
        { /* Navbar End */ }
        <div className={activeClassPadder} style={{height: 110}}></div>
      </>
    )
  }

}

export default Nav
