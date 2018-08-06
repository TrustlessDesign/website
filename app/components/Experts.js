import React from 'react';

export default function Experts() {
  return (
    <div className="container main-section experts" id="experts">
      <div className="row pb-5">
        <div className="col text-center">
          <h1>
            <span className="white" style={{ fontWeight: 100 }}>
              MEET OUR
            </span>
            <span className="color-blue"> EXPERTS</span>
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md">
          <div className="author">
            <div className="author-top">
              <div className="author-image logan" />
              <div className="author-socials mt-2">
                <a
                  href="https://www.linkedin.com/in/elitehacker33/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <br />
                <a href="https://github.com/lsaether" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" />
                </a>
                <br />
                <a href="https://twitter.com/7saether" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>
            <div className="author-text mt-4">LOGAN SAETHER</div>
            <div className="author-description mt-2">
              Smart contract engineer. Melonport Blockchain Hackathon &quot;Reinvent Finance&quot;
              winner. Over 2 years of experience working with blockchain systems and building
              cryptocurrency applications. He believes that the decentralization movement is a
              paradigm shift as important to society as the industrial revolution was 200 years ago.
            </div>
            <div className="author-wrapper" />
          </div>
        </div>
        <div className="col-md mt-4 mt-md-0">
          <div className="author">
            <div className="author-top">
              <div className="author-image daniel" />
              <div className="author-socials mt-2">
                <a
                  href="https://stackoverflow.com/users/story/2166409"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-stack-overflow" />
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/kmakdaniel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <br />
                <a href="https://github.com/Kuzirashi" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" />
                </a>
                <br />
                <a
                  href="https://twitter.com/danielkmakcom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </div>

            <div className="author-text mt-4">DANIEL KMAK</div>
            <div className="author-description mt-2">
              Top 3% StackOverflow contributor with 13 000 reputation. Melonport Blockchain
              Hackathon &quot;Reinvent Finance&quot; winner. JavaScript and SPA expert with 2 video
              courses authored for Packt Publishing; HackerNoon author, HackHands expert, Ember
              teacher. Daniel has more than 6 years of JavaScript experience.
            </div>
            <div className="author-wrapper" />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center mt-3">
          <div>
            <a
              href="https://blog.chronologic.network/chronologic-developer-logan-saether-presents-at-dappcon-in-berlin-d2e69570254f"
              target="_blank"
              rel="noopener noreferrer"
              className="team-description"
            >
              Logan Saether speaks at Dappcon Berlin.
              <span className="team-description-meta">- Berlin, Germany. July, 2018.</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-3">
          <div>
            <a
              href="https://youtu.be/rK20a1UQN_A"
              target="_blank"
              rel="noopener noreferrer"
              className="team-description"
            >
              Logan Saether at EDCON about smart-contract engineering.
              <span className="team-description-meta">- Toronto, Canada. June, 2018.</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-3">
          <div>
            <a
              href="https://blog.chronologic.network/chronologic-developers-win-melonport-hackathon-in-switzerland-224e6d3fbd8b"
              target="_blank"
              rel="noopener noreferrer"
              className="team-description"
            >
              Melonport Blockchain Hackathon &quot;Reinvent Finance&quot; Grand Prize winners.
              <span className="team-description-meta">- Zug, Switzerland. May, 2018.</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="margin-top-100px" />
    </div>
  );
}
