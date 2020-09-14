import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import SEO from "../components/seo"
import Nav from "../components/nav"

import Banner from "../images/banner2.jpg"  
import "../components/index.css"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <section className="banner" id="banner">
      <div id="banner-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active" style={{backgroundImage: `url(${Banner})`, backgroundSize: 'cover'}}>
           <div className="overlay"></div>
            <div className="container">
              <div className="content-wrap">
                <div className="content">
                  <div className="textwrap">
                    <div className="subtitle animated fadeIn wow" data-wow-delay=".5s">
                      <h2>Where Music Has Dimension</h2>
                    </div>
                    <div className="title animated fadeIn wow" data-wow-delay="1s">
                      <h1>WMHD Radio <span className="light">The Monkey</span></h1>
                    </div>
                    <div className="subtitle animated fadeIn wow" data-wow-delay="1.5s">
                      <h2>Rose-Hulman Institute of Technology</h2>
                    </div>
                  </div>{ /*/.textwrap */ }
                </div>{ /*/.content */ }
              </div>{ /*/.content-wrap */ }
            </div>{ /*/.container */ }
          </div>{ /*/.item */ }
        </div>{ /*/.carousel-inner */ }
        { /* Controls */ }
        <div className="scroll-info">
          <a onClick={() => scrollTo('#home-nav')}>
            <div className="shape">
              <i className="fa fa-angle-down"></i>
            </div>
          </a>
        </div>{ /*/.scroll-info */ }
      </div>{ /*/.banner-carousel */ }
    </section>{ /* /.banner */ }
    { /* Banner End */ }

    <Nav home={true}/>

    { /* Highlight Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>Check This Out</h2>
          <div className="text">
            <h3>Live DJ Set by Keith CR</h3>
            <div className="row">
            <div className="col-md-5">
              <p>First Aired May. 2, 2020</p>
              <p>Every Friday 10PM to 11PM EST with new episodes every other week. You can listen to some awesome music and interact with Keith as he DJ's via our discord and mixcloud live chat. </p>
              <button className="def-button2"> <a href="https://www.mixcloud.com/wmhdonlineradio/playlists/live-dj-set-with-keith-cr/"> Listen Here! </a> </button>
            </div>
            <div className="col-md-5">
              <Img fixed={{ ...data.keithhighlightImage.childImageSharp.fixed, aspectRatio: 1 / 1 }} className="keithhighlightimage" />
            </div>
            </div>
          </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* highlight */ }
    { /* Highlight End */ }

    { /* Schedule Begin */ }
    {/*<section className="schedule" id="schedule">
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.3s">
          <h2>Show Schedule</h2>
          <div className="text">
            <p>All times are in EST.</p>
          </div>
        </div>
      </div>
    </section>*/}
    { /* Schedule End */ }

    { /* Rentals Begin */ }
    <section className="rentals" id="rentals">
      <div className="container">
        <div className="overlay">
          <h2>Do You Need Some Help?</h2>
          <div className="text">
            <h3>Rentals</h3>
            <p>WMHD is always happy to rent out our equipment and DJ services for any event you might be able to imagine and plan. We have high quality equipment ready for you to use when you need it. From microphones to full on lighting set ups and mixers, we're here to help you out! Not to forget our facilities which are open to student use. We have our fully equipped recording studio, including a keyboard, drum kit, and bass amp, and our brand new podcasting studio equipped with three high quality microphones. <br></br> Just fill out our rental form using the button below!</p>
            <button className="def-button2"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform"> Rental Form </a> </button>
            <h3>Services</h3>
            <p>WMHD also offers different types of services, not just use of equipment. Students apart of WMHD offer their help with both production and guitar lessons. These lessons are often in small groups or even one-on-one, giving you that valuable experience needed to master any new skill! <br></br> If you're at all interested, feel free to hit the button below to get more information!</p>
            <button className="def-button2"> <a href="/Services"> Services </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* rentals */ }
    { /* Rentals End */ }

    { /* Highlight Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>Check This Out</h2>
          <div className="text">
          <h3>Talkin' Bout Rose</h3>
          <div className="row">
            <div className="col-md-5">
              <p>Catch up with all the things going on at Rose with Eric Liobis, Emilee Roberts, and Cory Pardieck along with different special guests. From campus updates to the inside scoop From campus updates to the inside scoop on other projects from varying groups on and off campus, Talkin’ Bout Rose is one of the best ways to get connected!</p>
              <button className="def-button2"> <a href="https://www.mixcloud.com/wmhdonlineradio/playlists/residence-life-podcast/"> Listen Here! </a> </button>
            </div>
            <div className="col-md-5">
              <Img fixed={{ ...data.highlightImage.childImageSharp.fixed, aspectRatio: 1 / 1 }} className="highlightimage" />
            </div>
          </div>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* highlight */ }
    { /* Highlight End */ }

    { /* About Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>About WMHD</h2>
          <div className="text">
            <p>WMHD is an online college radio station hosted by students of Rose-Hulman Institute of Technology.</p>
            <button className="def-button2"> <a href="about"> About Us </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* about */ }
    { /* About End */ }

    { /* Highlight Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>Check This Out</h2>
          <div className="text">
          <h3>New Radio Launch!</h3>
              <p>Aired April. 16, 2020 </p>
              <p>The WMHD Online Radio Launch Event marked the official launch of version 2.0 of WMHD Online Radio. The event featured 14 current students and 7 alumni introducing their favorite songs in a 4+ hour event. </p>
            <button className="def-button2"> <a href="https://www.mixcloud.com/wmhdonlineradio/wmhd-online-radio-launch-event/"> Listen Here! </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* highlight */ }
    { /* Highlight End */ }

    { /* calendarbegin */ }
    <section className="calendar" id="calendar">
          <div className="overlay"></div>
          <div className="container content">
            <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.5s"><h2>Calendar</h2></div>
            <iframe src="https://calendar.google.com/calendar/embed?src=wmhdradio%40gmail.com&amp;ctz=America/New_York&amp;mode=AGENDA&amp;color=%23D50000" title="calendar" style={{border: 0}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
          </div> { /*/.container*/ }
    </section>{ /*/.calendar*/ }
    { /* calendar end */ }
  </>
)

export const query = graphql`
  query {
    highlightImage: file(relativePath: { eq: "Talking Bout Rose.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    keithhighlightImage: file(relativePath: {eq: "Keith Dj.JPG" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
