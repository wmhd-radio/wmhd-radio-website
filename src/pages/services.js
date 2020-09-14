import React from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ServicesPage = ({data}) => (
  <>
    <SEO title="Services" />
    <section className="container content" style={{marginBottom: 20}}>
        <h1>Campus Services</h1>
        <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio events, open hours, services, and room rentals are canceled until further notice. The studio will be closed for this time period as well.</div >
        <p className="services-info">For any questions regarding our services or to book one of our studios, contact our officers by <a href="mailto:wmhdradio@gmail.com">email</a>.</p>
        <div className="row">
          <div className="col-md-4">
            <h3>DJ Services</h3>
            <Img fluid={data.djServices.childImageSharp.fluid} className="services-pic" />
            <p>WMHD offers DJ services for on-campus events. A WMHD member will bring equipment and run it for any Rose-Hulman on-campus event for free. A playlist can either be created or a playlist can be provided by the event organizers. If you would like us to DJ at your event, please fill out our rental request and DJing services <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form.</a> </p>
          </div>
          <div className="col-md-4">
            <h3>Equipment Rentals</h3>
            <Img fluid={data.equipmentRentals.childImageSharp.fluid} className="services-pic" />
            <p>WMHD Radio offers free equipment rentals for any Rose-Hulman affiliated group or individual. Speakers, microphones, lightening systems, mixers, and more can all be provided. Popular events that request our equipment include concerts, karaoke, dances, and any event that would benefit from some music. We rent to events of all sizes and can help make your event a success! All rentals must be made at least one week in advance and renters will learn how to operate the equipment to make their event a hit! To request our equipment please fill out our services request <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>.</p>
          </div>
          <div className="col-md-4">
            <h3>Recording Studio</h3>
            <Img fluid={data.recordingStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Recording Studio, located in BSB basement, is a soundproofed room that houses equipment and instruments that are available for any Rose-Hulman student to use. This fully functional recording studio can be used by musically aspirational students to record their art. Students don’t even need to own their own equipment as WMHD Radio owns several instruments that are available to the entire community! Music created using our equipment can be played on our station. To book our studio, send your emails to<a href="mailto:wmhdradio@gmail.com"> wmhdradio@gmail.com. </a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-4">
            <h3>Lessons & Workshops</h3>
            <Img fluid={data.guitarLessons.childImageSharp.fluid} className="services-pic" />
            <p>WMHD Radio offers several peer taught learning experiences for the students of Rose-Hulman. Students can attend lessons and classes where they are able to learn different musical and technical skills. We currently offer guitar lessons that will start educating individuals on how to play the electric or acoustic guitar. We also offer Production lessons where students will have access to our expansive software and equipment. All of our lessons are free. All of our classes are for students, taught by students. We’re always looking to expand our offerings so if there’s a skill you’d like to share with others please reach out to us about starting your own class. If you’re interested in joining a class or starting your own please contact us through email at<a href="mailto:wmhdradio@gmail.com"> wmhdradio@gmail.com.</a></p>
          </div>
          <div className="col-md-4">
            <h3>Podcast Studio</h3>
            <Img fluid={data.podcastStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Podcast Studio was created last year as a home for our WMHD original podcasts. This room contains everything needed to record and produce a podcast. Any Rose-Hulman affiliated group or individual may use the studio for free. Podcasts created there can also be aired on our online radio station. If you’re interested in booking our Podcasting room then send us an email. To book our studio, send your emails to<a href="mailto:wmhdradio@gmail.com"> wmhdradio@gmail.com.</a></p>
          </div>
          <div className="col-md-2">
          </div>
        </div>
    </section>
  </>
)

export const query = graphql`
  query {
    djServices: file(relativePath: { eq: "dj-services.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4007) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    equipmentRentals: file(relativePath: { eq: "equipment-rentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2953) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    recordingStudio: file(relativePath: { eq: "recording-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 6015) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    productionLessons: file(relativePath: { eq: "production-lessons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4026) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    guitarLessons: file(relativePath: { eq: "guitar-lessons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2047) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    podcastStudio: file(relativePath: { eq: "podcast-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default ServicesPage