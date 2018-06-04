import React from 'react';

export default function Experts() {
  return (
    <div className="container main-section">
      <div className="row pb-5">
        <div className="col text-center">
          <h1>
            <span style={{ fontWeight: 100 }}>MEET OUR</span>
            <span style={{ color: '#082634' }}> EXPERTS</span>
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md">
          <div className="author">
            <div className="author-image logan" />
            <div className="author-text">LOGAN SAETHER</div>
            <div className="author-description mt-4">
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
            <div className="author-image daniel" />
            <div className="author-text">DANIEL KMAK</div>
            <div className="author-description mt-4">
              Top 3% StackOverflow contributor with 13 000 reputation. Melonport Blockchain
              Hackathon &quot;Reinvent Finance&quot; winner. JavaScript and SPA expert with 2 video
              courses authored for Packt Publishing; HackerNoon author, HackHands expert, Ember
              teacher. Daniel has more than 6 years of JavaScript experience.
            </div>
            <div className="author-wrapper" />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <div className="pb-5">
            <img src="img/team1.jpg" className="team-photo" />
            <br />
            <br />
            <span className="team-description">
              Logan and Daniel together have won{' '}
              <b>Melonport Blockchain Hackathon &quot;Reinvent Finance&quot; Grand Prize</b>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
