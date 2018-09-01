import React from 'react';
import GetQuoteButton from './GetQuoteButton';

export default function Services() {
  return (
    <div>
      <div className="xxx" />

      <div className="headline">
        <span className="h1-head glitch">
          SMART CONTRACT SECURITY
        </span>
      </div>

      <div className="container main-section services">
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="audit-feature">
              <i className="fa fa-check" aria-hidden="true" />
              <br />
              <div className="audit-feature-text">FULL COMPREHENSIVE REVIEW</div>
              <div className="audit-extra mt-2">
                Trustless Design uses a suite of interior tools to test many vectors of
                vulnerabilities found in Smart Contracts. We read your code line-by-line and assure
                correctness at every detail.
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-md-0">
            <div className="audit-feature">
              <i className="fa fa-send" aria-hidden="true" />
              <br />
              <div className="audit-feature-text">FREQUENT UPDATES DURING THE PROCESS</div>
              <div className="audit-extra mt-2">
                We understand how critical the security audit phase of a project is for the team, so
                we stay in contact with our clients at every step of the way.
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-md-0">
            <div className="audit-feature">
              <i className="fa fa-cogs" />
              <br />
              <div className="audit-feature-text">ACTIONABLE FEEDBACK AND REPORTS</div>
              <div className="audit-extra mt-2">
                At the end of our review we produce a professional report detailing our methods and
                disclosing any vulnerabilities that we found. After allowing for corrections and at
                your option, we publish the report to the public on our blog.
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
