/** @format */
import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'react-scroll';

// Components
import Layout from '&components/Layout';

// Styling
import style from '&styles/pages.module.sass';

const MusicMatch = () => {
  const data = useStaticQuery(graphql`
    query {
      subhead: file(relativePath: { eq: "Spotify-Demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      old: file(relativePath: { eq: "Spotify-OldMockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      infoarch: file(relativePath: { eq: "Spotify-InfoArch.png" }) {
        childImageSharp {
          fluid(maxWidth: 1140) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      wireframe: file(relativePath: { eq: "Spotify-Wireframe.png" }) {
        childImageSharp {
          fluid(maxWidth: 1140) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      mockup: file(relativePath: { eq: "Spotify-Mockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 1140) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      playlists: file(relativePath: { eq: "Spotify-Playlist.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      artists: file(relativePath: { eq: "Spotify-Artist.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      stats: file(relativePath: { eq: "Spotify-Stats.png" }) {
        childImageSharp {
          fluid(maxWidth: 1140) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout title="MusicMatch | Christopher Obando" description="Personal Project using Next & Typescript">
      <div className={`${style.Title} ${style.MusicMatch}`}>
        <h1>MusicMatch</h1>
      </div>
      <div className={style.SubHead}>
        <div className={style.Image}>
          <Img className={style.Demo} fluid={data.subhead.childImageSharp.fluid} />
        </div>
        <div className={style.Description}>
          <p>
            <span>Timeline:</span> 4 weeks, Personal Project
          </p>
          <p>
            <span>Role:</span> Design, Fullstack Development
          </p>
          <p>
            <span>Technologies:</span> Figma, React, Nextjs, TypeScript, SCSS, MongoDB
          </p>
          <p>
            <span>Overview:</span> I revisited my favorite personal project for a major design and code overhaul.
          </p>
          <a className={style.Link} href="https://obando-spotify.now.sh/" rel="noopener noreferrer" target="_blank">
            <p className="H4">CHECK IT OUT HERE</p>
          </a>
        </div>
      </div>

      <div className={style.Container}>
        <div id="timeline1" className={`${style.Timeline} ${style.MusicTimeline}`}>
          <div className={`${style.TimelineBtn} ${style.ActiveBtn}`}>
            <p className="H3">OVERVIEW</p>
          </div>
          <Link className={style.TimelineBtn} smooth to="timeline2" offset={-16}>
            <p className="H3">PROCESS</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline3" offset={-16}>
            <p className="H3">OUTCOME</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline4" offset={-16}>
            <p className="H3">LESSONS</p>
          </Link>
        </div>

        <h1 className={style.Header}>BACKGROUND</h1>
        <p className={style.Text}>
          As a huge fan of Spotify’s music platform, I got tired of waiting an entire year for Spotify Wrapped to be
          released for me to see my listening statistics. So, last year, I taught myself React and built a web-player
          that provided users with improved insights of their listening history and provided recommendations based on
          their current “moods”.
        </p>

        <div className={style.SubHead}>
          <div className={style.Image}>
            <Img className={style.Demo} fluid={data.old.childImageSharp.fluid} />
          </div>
          <div className={style.Description}>
            <h1 className={style.Header}>ONE YEAR LATER...</h1>
            <p>
              Although I’m glad that I pursued the project and saw the completion of all key features, there were plenty
              of issues that made it far from complete. So, I found myself itching at the opportunity to crack open the
              code-base and look at how my skills had developed in only a year.
            </p>
            <a
              className={style.Link}
              href="https://obando-spotify-stats.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2>CHECK IT OUT HERE</h2>
            </a>
          </div>
        </div>

        <h1 className={style.Header}>PROBLEM</h1>
        <p className={style.Text}>
          After exploring the full capability of the Web API, I realized that I had barely begun to explore the
          potential applications of detailed track insights, monthly user listening statistics, and pairing my
          application with an external database and/or a websocket to stream data between simultaneous users.
        </p>

        <h1 className={style.Header}>PROJECT GOALS</h1>
        <p className={style.FirstText}>
          <span className={style.Span}>Refactor:</span> To redesign my previous application by prioritizing key features
          on the front page, using NextJS dynamic API routes on initial page loading to optimize network calls, and
          creating a clean, user-friendly interface that is consistent across the entire application.
        </p>
        <p className={style.Text} style={{ marginBottom: '120px' }}>
          <span className={style.Span}>New Features: </span>
          Collaborative listening, exporting playlists, and most importantly, using user data to determine their “match
          score” with their friends.
        </p>

        <div id="timeline2" className={`${style.Timeline} ${style.MusicTimeline}`}>
          <Link className={style.TimelineBtn} smooth to="timeline1" offset={-16}>
            <p className="H3">OVERVIEW</p>
          </Link>
          <div className={`${style.TimelineBtn} ${style.ActiveBtn}`}>
            <p className="H3">PROCESS</p>
          </div>
          <Link className={style.TimelineBtn} smooth to="timeline3" offset={-16}>
            <p className="H3">OUTCOME</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline4" offset={-16}>
            <p className="H3">LESSONS</p>
          </Link>
        </div>

        <h1 className={style.Header}>COMPETITIVE ANALYSIS</h1>
        <p className={style.Text}>
          To lay the foundation for MusicMatch, I took a look at Spotify’s vanilla web application, and what user
          features they weren’t reaching.
        </p>

        <div className={style.Table}>
          <div className={style.Head}>
            <p className={`H3 ${style.TableItem}`}>User Feature</p>
            <p className={`H3 ${style.TableItem}`}>Spotify</p>
          </div>
          <div className={style.TableRow}>
            <p className={`H5 ${style.TableItem}`}>Listening Statistics</p>
            <p className={`H5 ${style.TableItem}`}>Limited</p>
          </div>
          <div className={style.TableRow}>
            <p className={`H5 ${style.TableItem}`}>Recommendations</p>
            <p className={`H5 ${style.TableItem}`}>Limited</p>
          </div>
          <div className={style.TableRow}>
            <p className={`H5 ${style.TableItem}`}>Simultaneous Listening</p>
            <p className={`H5 ${style.TableItem}`}>None</p>
          </div>
          <div className={style.TableRow}>
            <p className={`H5 ${style.TableItem}`}>Cloning Playlists</p>
            <p className={`H5 ${style.TableItem}`}>None</p>
          </div>
          <div className={style.TableRow}>
            <p className={`H5 ${style.TableItem}`}>Exporting Music</p>
            <p className={`H5 ${style.TableItem}`}>None</p>
          </div>
        </div>

        <h1 className={style.Header}>KEY FINDINGS</h1>
        <p className={style.FirstText}>
          I found that the only official listening stats released to users was Spotify Wrapped. It shows users their top
          five artists and tracks from that year, but it was only released in December.
        </p>
        <p className={style.FirstText}>
          As for music recommendations, Spotify had several options, however, none were very customizable. Users were
          given a weekly discover playlist with new tracks based on their short term listening history, daily mixes with
          familiar tracks based on their created playlists and saved libraries, and it suggested tracks to add to a
          playlist based on the five most popular artists in that playlist. All of these taken into account, the
          playlist recommendation was the most practical, however its implentation would often lead to skewed
          recommendations in very diverse playlists.
        </p>
        <p className={style.FirstText}>
          Although Spotify has detailed data about individual tracks such as “danceability” or tempo, the platform does
          not seem to use them for recommendation.
        </p>
        <p className={style.FirstText}>
          Given search functionality and detailed track insights from the API, I knew that MusicMatch could give users
          the option to do advanced searches for the types of tracks they wanted to hear. I could generate entire
          playlists given those search variables, and learn from the user’s music taste to provide better insights with
          each suggestion.
        </p>
        <p className={style.Text}>
          This data could then be used to create a unique score for the user, not to rank their taste but rather to
          classify it numerically. I could then take this score and use it to compare different users and determine
          their “compatibility”.
        </p>

        <h1 className={style.Header2}>INFORMATION ARCHITECTURE</h1>
        <Img className={style.Display} fluid={data.infoarch.childImageSharp.fluid} />

        <h1 className={style.Header2}>WIREFRAME</h1>
        <Img className={style.Display} fluid={data.wireframe.childImageSharp.fluid} />

        <h1 className={style.Header2}>MOCKUP</h1>
        <Img className={style.Display} fluid={data.mockup.childImageSharp.fluid} />

        <h1 className={style.Header}>USER RESEARCH TESTING</h1>
        <p className={style.FirstText}>
          After releasing a working prototype, I conducted user research testing to gain insights on the friction points
          of 3 task flows:
        </p>
        <h2>1. Enable “clean music” mode for playback</h2>
        <h2>2. Check your top artists/tracks</h2>
        <h2 className={style.Text}>3. Browse and play an unpopular track from an obsure artist</h2>

        <h1 className={style.Header}>USER TESTING INSIGHTS</h1>
        <h2>1. Why do I still need to launch Spotify to use this?</h2>
        <p className={style.Text}>
          One limitation of the API is its inability to begin playback on a specific device. Users were confused because
          they had to launch the app and begin playing music before the in-app player would appear, defeating the
          purpose of having only one application to use for Spotify. This is of course because my application cannot
          control a user’s device. I can, however, integrate the Spotify Web Playback SDK and link it with my
          application to play in-browser music, which is a future goal for the application.
        </p>
        <h2>2. Confusing navigation</h2>
        <p className={style.Text}>
          I got feedback about two different navigation issues, the first being what was on the stat page. When I told
          users to check their top tracks and artists, they immediately assumed that it would be on a profile page. When
          their only navigation link was “stats”, it was worded too technical for the average user and they did not
          associate it with personal insights. As soon as the other new features are implemented, I will move them along
          with the playlists link to the profile page.
        </p>
        <h2>3. What is “clean mode”?</h2>
        <p className={style.Text}>
          A feature I wanted to add to the application was a “clean mode”, which gave users the ability to skip explicit
          tracks in their playback. I thought it would be useful for professional gatherings or events where explicit
          music would not be appropriate, and it could easily be a feature toggled by a user through their expanded
          player. When I asked users to test the task flow of toggling it, every user asked where the settings were.
          Although my intention was to make this action easy to access and non-invasive through its placement in the
          expanded player, along with shuffle or repeat, users seemed to associate this feature with a settings menu.
          Also, users were confused by the wording of “clean mode”, so it has been changed with “skip explicit” for
          clarification while I test out a settings menu.
        </p>

        <div id="timeline3" className={`${style.Timeline} ${style.MusicTimeline}`}>
          <Link className={style.TimelineBtn} smooth to="timeline1" offset={-16}>
            <p className="H3">OVERVIEW</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline2" offset={-16}>
            <p className="H3">PROCESS</p>
          </Link>
          <div className={`${style.TimelineBtn} ${style.ActiveBtn}`}>
            <p className="H3">OUTCOME</p>
          </div>
          <Link className={style.TimelineBtn} smooth to="timeline4" offset={-16}>
            <p className="H3">LESSONS</p>
          </Link>
        </div>

        <h1 className={style.Header}>FEATURES</h1>
        <div className={style.SubHead}>
          <div className={style.Image}>
            <Img className={style.Demo} fluid={data.playlists.childImageSharp.fluid} />
          </div>
          <div className={style.Feature}>
            <h1 className={style.Header}>PLAYLIST TAB</h1>
            <p>
              Track filter prioritized at the top for easy search in larger playlists. Can sort by date, artist, or
              track name.
            </p>
          </div>
        </div>

        <div className={style.SubHead}>
          <div className={style.Feature}>
            <h1 className={style.Header}>ARTIST TAB</h1>
            <p>
              Artist page now reduces the space of popular tracks through the use of a horizontal scroll, allowing more
              space for tracks, albums, and similar artists. The detail panel at the top also lists the artist’s
              popularity and associated genres, which will be used to improve the suggestion algorithm. As users look
              for more obscure artists in their preferred genres, the popularity indication serves as a marker.
            </p>
          </div>
          <div className={style.Image}>
            <Img className={style.Demo} fluid={data.artists.childImageSharp.fluid} />
          </div>
        </div>

        <Img className={style.Demo} style={{ marginBottom: '48px' }} fluid={data.stats.childImageSharp.fluid} />
        <h1 className={style.Header}>STATS TAB</h1>
        <p className={style.Text}>
          Soon to be the profile page, the stats page exhibits your top tracks and artists, which can be selected by top
          of the month, past six months, and all-time. Genre will be the next feature to be added, which graph
          visualizations of an artist’s progression up and down this list as months go by.
        </p>

        <div id="timeline4" className={`${style.Timeline} ${style.MusicTimeline}`}>
          <Link className={style.TimelineBtn} smooth to="timeline1" offset={-16}>
            <p className="H3">OVERVIEW</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline2" offset={-16}>
            <p className="H3">PROCESS</p>
          </Link>
          <Link className={style.TimelineBtn} smooth to="timeline3" offset={-16}>
            <p className="H3">OUTCOME</p>
          </Link>
          <div className={`${style.TimelineBtn} ${style.ActiveBtn}`}>
            <p className="H3">LESSONS</p>
          </div>
        </div>

        <h1 className={style.Header}>TAKEAWAYS</h1>
        <h2 className={style.SubHeader}>1. It’s important to look back at your mistakes</h2>
        <p className={style.FirstText}>
          Refactoring old code is a huge project by itself. Even though it was only made a year ago, I think it was very
          encouraging to look at how far I have come as a developer. I remember sitting in class last year, scouring
          Stack Overflow for answers and waiting for someone to comment on my Github issues for hours, only to be told I
          forgot to include a return statement in my API call.
        </p>
        <p className={style.Text}>
          Although I didn’t need to go back and fix this project, I realized that a product is never truly finished. I
          learned a lot more about Next’s framework in a week than I had working on a collaborative project in a month.
        </p>

        <h2 className={style.SubHeader}>2. Never use someone else’s work if you can do it yourself</h2>
        <p className={style.FirstText}>
          I used to have a naive mentality that there was no reason to do something myself if someone else had already
          done it for me. Although it saved me time and frustration, I was always restricted by the third party
          libraries I was using rather than my own knowledge limitations.
        </p>
        <p className={style.Text}>
          When it comes to design, there is justification in seeking inspiration and sticking to what is famililar with
          users, but there is also gratification when you take risks and try something brand new. I took inspiration
          from the design of popular music players in the market, and created an interface that prioritized the features
          that users wanted to see first.
        </p>

        <h1 className={style.Header}>NEXT STEPS</h1>
        <h2 className={style.SubHeader}>1. Gamifying the Experience</h2>
        <p className={style.Text}>
          As I continue progress on the matching algorithm, I want to target the competitive nature of having statistics
          associated with the user’s listening history. Users should have “top genre” badges on their profiles along
          with their favorite artists and tracks - which in combination can create a “leaderboard” of music taste on
          each user’s profile. The compatibility feature will lead in nicely with this sense of one user’s taste being
          “better” or “worse” than anothers, although of course this is all subjective to the user’s preference.
        </p>

        <h2 className={style.SubHeader}>2. Prioritize accessibility</h2>
        <p className={style.Text}>
          Something I take very seriously is accessibility. As I complete development work, I will use tools such as the
          WAVE accessibility extension to check that all of my code complies with A11y standards, and that the color
          contrast ration is above an 8 throughout the site to allow for friction-free ability to use the application. I
          am referring to Material Design UI guidelines for padding, line spacing, and button size for accessibility
          purposes as well.
        </p>

        <h2 className={style.SubHeader}>3. PWA!</h2>
        <p className={style.Text}>
          If I integrate the Web Playback SDK into my application, it could completely replace the Spotify application
          as the user’s primary tool for listening to music with their Spotify subscriptions. By converting the site
          into a progressive web application, users could download the app like any other onto their home screens for a
          faster launch.
        </p>
      </div>
    </Layout>
  );
};

export default MusicMatch;
