import React, { Component } from 'react';
import GetQuoteButton from './GetQuoteButton';

export default class Services extends Component {
  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }

    require('../vendor/morhpext/morphext');

    const $ = require('jquery');

    $('#test').Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: 'fadeIn',
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ',',
      // The delay between the changing of each phrase in milliseconds.
      speed: 6000
      // complete: function () {
      //     // Called after the entrance animation is executed.
      // }
    });
  }

  render() {
    return (
      <div>
        <div className="xxx" />
        <div className="headline">
          <span className="h1-head bold-headline" id="test">
            Professional,Transparent,Actionable
          </span>
          <span className="h1-head glitch" data-text="SECURITY AUDITS FOR SMART CONTRACTS">
            SECURITY AUDITS&nbsp;FOR SMART CONTRACTS
          </span>
        </div>

        <div className="container main-section services">
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="audit-feature">
                <i className="fas fa-check fa-lg" aria-hidden="true" />
                <br />
                <div className="audit-feature-text">FULL COMPREHENSIVE REVIEW</div>
                <div className="audit-extra mt-2">
                  Trustless Design uses a suite of interior tools to test many vectors of
                  vulnerabilities found in Smart Contracts. We read your code line-by-line and
                  assure correctness at every detail.
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div className="audit-feature">
                <i className="fab fa-telegram-plane fa-lg" aria-hidden="true" />
                <br />
                <div className="audit-feature-text">FREQUENT UPDATES DURING THE PROCESS</div>
                <div className="audit-extra mt-2">
                  We understand how critical the security audit phase of a project is for the team,
                  so we stay in contact with our clients at every step of the way.
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div className="audit-feature">
                <i className="fas fa-cogs fa-lg" />
                <br />
                <div className="audit-feature-text">ACTIONABLE FEEDBACK AND REPORTS</div>
                <div className="audit-extra mt-2">
                  At the end of our review we produce a professional report detailing our methods
                  and disclosing any vulnerabilities that we found. After allowing for corrections
                  and at your option, we publish the report to the public on our blog.
                </div>
              </div>
            </div>
          </div>

          <GetQuoteButton />
          <hr className="margin-top-100px" />
        </div>
      </div>
    );
  }
}
