import React, { Component, Fragment } from 'react';

export default class GetQuoteButton extends Component {
  state = {
    contactOptionsVisible: false
  };

  render() {
    return (
      <div className="row quote-row">
        <div className="col text-center">
          {this.state.contactOptionsVisible ? (
            <div className="contact-options">
              <a
                href="mailto:audit@trustless.design"
                className="btn btn-primary btn-primary-sm-padding"
              >
                <i className="fa fa-envelope" />
                &nbsp; MAIL
              </a>
              <a href="https://t.me/danielkmak" className="btn btn-primary btn-primary-sm-padding">
                <i className="fa fa-telegram" />
                &nbsp; TELEGRAM
              </a>
            </div>
          ) : (
            <Fragment>
              <div className="quote-button-clicked-message hidden">
                Click to reveal contact options
              </div>
              <button
                className="btn btn-primary"
                onClick={() =>
                  this.setState({
                    contactOptionsVisible: true
                  })
                }
                onMouseOver={() =>
                  document
                    .getElementsByClassName('quote-button-clicked-message')[0]
                    .classList.remove('hidden')
                }
                onMouseOut={() =>
                  document
                    .getElementsByClassName('quote-button-clicked-message')[0]
                    .classList.add('hidden')
                }
              >
                GET QUOTE
              </button>
            </Fragment>
          )}

          <br />
          <div className="quote-message">
            We will respond in&nbsp;
            <span style={{ fontWeight: 'bold' }}>less than 24 hours</span>.
          </div>
        </div>
      </div>
    );
  }
}
