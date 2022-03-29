import './App.css';
import logo from './LogoDeepwire.png';
import typo from './TypoDeepWire.png';
import twitter from './twitter.png';
import insta from './insta.png';
import discord from './discord.png'

function App() {
  return (
    <>
  <meta charSet="utf-8" />
  <title>Landing Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
    rel="stylesheet"
  />
  <header>
    <img
      src={logo}
      alt="logo"
      width="8%"
      className="logos"
    />
    <img
      src={typo}
      alt="typo"
      width="12.5%"
      className="logos"
    />
  </header>
  <main>
    <h1>ARE YOU READY?</h1>
    <div className="newsletter">
      <p>Stay tuned for all the upcoming NFT drops. You'll be the first to know!</p>
      {/* Begin Mailchimp Signup Form */}
      <div id="mc_embed_signup">
        <form
          action="https://nftdeepwire.us14.list-manage.com/subscribe/post?u=4b3c8b20cd8611be7af4f83ca&id=bc665b47e9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate=""
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input
                type="email"
                defaultValue=""
                name="EMAIL"
                className="requiredemail"
                id="mce-EMAIL"
                placeholder="Your email address"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>{" "}
            {/* real people should not fill this in and expect good things - do not remove this or risk form
   bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_4b3c8b20cd8611be7af4f83ca_bc665b47e9"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                {" "}
                <br />
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
    <div className="links">
      <a
        href="https://discord.gg/Q4esGbsnMm"
        className="socials"
      >
        <img src={discord} className="socialsimg" alt="" />
      </a>
      <a
        href="https://twitter.com/NFTDeepWire"
        className="socials"
      >
        <img src={twitter} className="socialsimg" alt="" />
      </a>
      <a
        href="https://www.instagram.com/nft_deepwire/"
        className="socials"
      >
        <img src={insta} className="socialsimg" alt="" />
      </a>
    </div>
  </main>
</>

  );
}

export default App;
