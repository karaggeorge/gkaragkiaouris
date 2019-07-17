import Head from 'next/head';
import { NextPage } from 'next'
import { FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Page: NextPage = () => (
  <main>
    <Head>
      <meta charSet="utf-8" />
		  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <title>George Karagkiaouris</title>
      <meta name="Description" content="Full-stack Engineer using Node.js and React.js or Angular"></meta>
    </Head>
    <section className="profile">
      <img src="/static/profile.png" alt="profile picture"/>
      <h1>George Karagkiaouris</h1>
      <h2>Senior Engineer at <a href="http://www.northhighland.com/" target="_blank" rel="noopener">North Highland</a></h2>
      <div className="location"><div className="icon"><FaMapMarkerAlt/></div>Atlanta, GA 🇺🇸</div>
      {/* <div className="email"><div className="icon"><FaEnvelope/></div>gkaragkiaouris2@gmail.com</div> */}
      <p>
        Working as a full-stack Engineer using Node.js and React.js or Angular.
        Previously worked as a full-stack web developer at <a href="https://patientwisdom.com/" target="_blank" rel="noopener">PatientWisdom</a>.
        One of the maintainers of <a href="https://github.com/wulkano/kap" target="_blank" rel="noopener">Kap</a>.
      </p>
      <p>♥ Open Source</p>
      <div className="row social">
        <a href="https://github.com/karaggeorge" target="_blank" rel="noopener">
          <div className="item"><div className="icon"><FaGithub/></div>/karaggeorge</div>
        </a>
        <a href="https://twitter.com/gkaragkiaouris" target="_blank" rel="noopener">
          <div className="item"><div className="icon"><FaTwitter/></div>/gkaragkiaouris</div>
        </a>
        <a href="https://www.linkedin.com/in/gkaragkiaouris/" target="_blank" rel="noopener">
          <div className="item"><div className="icon"><FaLinkedinIn/></div>/gkaragkiaouris</div>
        </a>
      </div>
    </section>
    <style jsx>
      {
        `
          main {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
          }

          section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 1024px;
            text-align: center;
            width: 66%;
            padding: 64px 16px;
          }

          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 32px;
          }

          h1 {
            font-weight: 400;
            font-size: 2rem;
            margin: 0;
          }

          h2 {
            font-weight: 300;
            font-size: 1.5rem;
            margin: 0 0 36px;
          }

          a {
            color: #4a4a4a;
          }

          p {
            fonst-size: 1.125 rem;
            margin: 0;
          }

          p + p {
            margin-top: 16px;
          }

          .row {
            width: 100%;
            display: flex;
            align-items: center;
          }

          .info {
            margin-bottom: 64px;
            justify-content: center;
          }

          .location {
            display: flex;
            margin-bottom: 36px;
          }

          .email {
            display: flex;
            margin-bottom: 48px;
          }

          .social {
            margin-top: 48px;
            justify-content: space-around;
            flex-wrap: wrap;
          }

          .social a {
            text-decoration: none;
          }

          .item {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: center;
            position: relative;
            min-width: 160px;
            margin: 4px 8px;
          }

          .item + .item::before {
            content: "∙";
            position: absolute;
            left: 0;
            font-size: 0.5rem;
          }

          .icon {
            margin-right: 8px;
            display: flex;
            align-items: center;
          }
        `
      }
    </style>
    <style global jsx>
      {
        `
          html,
          body {
            margin: 0;
            font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
            color: #4a4a4a;
            line-height: 1.5;
            font-size: 1rem;
            letter-spacing: 0.8px;
          }
        `
      }
    </style>
  </main>
);

export default Page
