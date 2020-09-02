import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AboutPage = ({data}) => (
  <>
    <SEO title="About" />
    <section className="container content" style={{marginBottom: 20}}>
      <h1>About WMHD Radio</h1>
      <Img fluid={data.clubImage.childImageSharp.fluid} className="clubimage" />

      <h2 id="current"> Currently: </h2>
      <p>WMHD Radio is Rose-Hulman's official online radio station. We are also the heart of alternative music on campus, with <a href="https://wmhdradio.org/services">amenities and services </a> that we provide to all individuals and groups associated with Rose-Hulman. Located on campus in BSB Basement, we house a professional recording studio, production studio, and podcasting studio. <br></br>
      We provide a community for music lovers enabling them to explore their passion!  Musicians and groups utilize our equipment and events to create their own content, while non-musical individuals are free to explore our expansive library and equipment.
      So if you're behind the microphone or enjoy working behind the scenes, there's a place for you! We also assist with podcasts and radio shows which air on our online radio station. We have one of the largest spaces on campus for a club and we strive to make this available to campus.
      So come enjoy our recording studio, production studio, podcast studio, or just come hang out in our main meeting room! We have Jam Nights every Friday where any musician can come play with our equipment. We also host music lessons created by Rose-Hulman Students. So if you're wanting to learn a new skill or wanting to share your passion through teaching, we can provide a space to do so! </p>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, WMHD Radio meetings and open hours will be limited.</div>
      <p>If you’re a Rose-Hulman student looking to join WMHD Radio, then check out our <a href="https://wmhdradio.org/discord">Discord </a> or our <a href="https://rosehulman.sharepoint.com/sites/WMHD">My Rose-hulman Page </a> to find out about our latest events, when the station is open, meeting times, and much more! </p>

      <h3>Current Officers</h3>
      <div><b>General Manager</b>: Katana Colledge</div>
      <div><b>Equipment Manager</b>: Keith Condray-Raderstorf</div>
      <div><b>Personnel Director</b>: Laya Mehra</div>
      <div><b>Program Director</b>: Sabri Amer</div>
      <div><b>Communications Director</b>: Logan Ramon</div>
      <div><b>Webmaster</b>: Athena Henderson</div>
      <div><b>Treasurer</b>: Andrew Orians</div>
      <div><b>Faculty Advisor</b>: Kevin Lanke</div>
      
      <h3>Room Info</h3>
      <p>WMHD Radio consists of five different and unique rooms located in BSB basement. These rooms are open daily for members of the Rose-Hulman community to utilize.  Filled with equipment, CDs, records, and much more it’s a popular hangout spot for musicians and music fans alike.
        Our Broadcasting Room is utilized for meetings, events, hanging out and much more. Equipped with a TV, couches, tables, and whiteboards this multipurpose room is the heart of our station. 
        Our Recording Studio is a soundproofed room that houses equipment and instruments that are available for any Rose-Hulman student to use. This fully functional recording studio can be used by musically aspirational students to record their art. Students don’t even need to own their own equipment as WMHD Radio owns several instruments that are available to the entire community! With guitars, drums, keyboards, and much more we utilize this space every Friday with open jam sessions! Any Rose-Hulman affiliated individual is welcome to come down and make some music and new friends. 
        Our Production Studio is filled to the brim with technology both new and old. Housing everything from reel-to-reel players to soundboards this room has the equipment needed to make your own music.  Connected to our Recording Studio, bands and musicians are able to record themselves and the mix the tracks in our Production Studio.  Producers are also able to use our online tools such as FL Studio to create their own content. Our Podcast Studio was created last year as a home for our WMHD original podcasts. This room contains everything needed to record and produce a podcast. The most iconic element of the room has to be the 8ft tall wall of CDs. This wall is sure to inspire any DJ or podcaster that visits the room. If you’re interested in booking our Podcasting room please check out our <a href="https://wmhdradio.org/services">services page. </a>
        Finally, WMHD Radio’s Music Lounge is our newest room to join our studio. Planned to be completed by this fall, our Music Lounge will be a place dedicated to appreciating music.  We will be moving our extensive CD and Record collection to be housed in our lounge and utilized by the students of Rose-Hulman. With players, speakers, couches, and bean bags students will be able to relax, study, and share their favorite songs with others. </p>
      
      <h3>Open Radio Room Hours and Weekly Events</h3>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio events and open hours are canceled for the rest of academic year. The studio will be closed for this time period as well.</div>
      <div><b>Monday:</b></div>
      <div>4:00 PM - 5:00 PM (Keith)</div>
      <div><b>Tuesday:</b></div>
      <div>1:30 PM - 5:00 PM (Athena)</div>
      <div><b>Wednesday:</b></div>
      <div>4:30 PM - 5:30 PM (Will)</div>
      <div>Officer Mettings at 5:00 PM</div> 
      <div>Club Meetings at 8:00 PM</div>
      <div><b>Thursday:</b></div>
      <div>3:00 PM - 5:00 PM (Laya)</div>
      <div><b>Friday:</b></div>
      <div>1:30 PM -5:00 PM (Athena)</div>
      <div>5:00 PM - 12:00 AM (Katana)</div>
      <div>Jam Session from 8:00 PM to 12:00 AM</div>
      <div><b>Saturday:</b></div>
      <div>Production Lessons from 2:00 PM to 3:30 PM</div> 
      <div>Guitar Lessons from 3:00 PM to 5:00 PM</div>
      <div>Jam Session from 5:00 PM to 12:00 AM</div>

      <h2 id="history">History: </h2>

      <p>WMHD Radio received its name back in the 1980s but it existed long before then. Originally conceived as a student-run college radio station, it has since evolved into the central hub of music on Rose-Hulman's campus. </p>

    </section>
  </>
)

export const query = graphql`
  query {
    clubImage: file(relativePath: { eq: "club-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4028) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
