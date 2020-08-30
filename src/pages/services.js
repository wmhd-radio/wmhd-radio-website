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
            <p>WMHD offers DJ services for on-campus events. A WMHD member will bring equipment and run it for any Rose-Hulman on-campus event for free. A playlist can either be created or a playlist can be provided by the event organizers. If you would like us to DJ at your event, please fill out our rental request and DJing services form. <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a> </p>
          </div>
          <div className="col-md-4">
            <h3>Equipment Rentals</h3>
            <Img fluid={data.equipmentRentals.childImageSharp.fluid} className="services-pic" />
            <p>WMHD Radio offers free equipment rentals for any Rose-Hulman affiliated group or individual. Speakers, microphones, lightening systems, mixers, and more can all be provided. Popular events that request our equipment include concerts, karaoke, dances, and any event that would benefit from some music. We rent to events of all sizes and can help make your event a success! All rentals must be made at least one week in advance and renters will learn how to operate the equipment to make their event a hit! To request our equipment please fill out our services request form. <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>.</p>
          </div>
          <div className="col-md-4">
            <h3>Recording Studio</h3>
            <Img fluid={data.recordingStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Recording Studio, located in BSB basement, is a soundproofed room that houses equipment and instruments that are available for any Rose-Hulman student to use. This fully functional recording studio can be used by musically aspirational students to record their art. Students don’t even need to own their own equipment as WMHD Radio owns several instruments that are available to the entire community! Music created using our equipment can be played on our station. To book our studio, send your emails to wmhdradio@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Guitar Lessons</h3>
            <Img fluid={data.guitarLessons.childImageSharp.fluid} className="services-pic" />
            <p>Learn the basics of guitar playing every Saturday from 3:00pm to 5:00pm. These free lessons will get you started on electric or acoustic guitar. Contact Laya Mehra for more details.</p>
          </div>
          <div className="col-md-4">
            <h3>Production Lessons</h3>
            <Img fluid={data.productionLessons.childImageSharp.fluid} className="services-pic" />
            <p>Learn to produce your own music every Saturday from 2:00pm to 3:00pm. You'll have access to our expansive software and equipment. Contact Frank Lancaster for more details.</p>
          </div>
          <div className="col-md-4">
            <h3>Podcast Studio</h3>
            <Img fluid={data.podcastStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Production Studio is filled to the brim with technology both new and old. Housing everything from reel-to-reel players to soundboards this room has the equipment needed to make your own music. Connected to our Recording Studio, bands and musicians are able to record themselves and the mix the tracks in our Production Studio. Producers are also able to use our online tools such as FL Studio to create their own content. To book our studio, send your emails to wmhdradio@gmail.com</p>
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