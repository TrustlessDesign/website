import React from 'react';

export default function Faq() {
  return (
    <div className="container main-section">
      <div className="row pb-5">
        <div className="col text-center">
          <h1>
            <span style={{ color: '#082634' }}>KNOWLEDGE</span>{' '}
            <span style={{ fontWeight: 100 }}>BASE</span>
          </h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="faq-question">Do I need a security audit?</div>
          <br />
          <div className="faq-answer">
            If your smart contract or decentralized application will be handling any amount of
            significant funds in production, you need an audit to ensure that there are no
            vulnerabilities or exploits in the code. Trustless Design&apos;s talent is top-notch at
            catching hard-to-spot exploits that others miss.
          </div>
        </div>

        <div className="col-md-12">
          <div className="faq-question">What is contained in the audit report?</div>
          <br />
          <div className="faq-answer">
            We deliver an audit report which details our process and methods as we review your code
            and test the contracts. We highlight any vulnerabilities we may find and give
            suggestions about best practices and code style. With your permission, we prepare a blog
            post to share with our community about the findings of the audit.
          </div>
        </div>

        <div className="col-md-12">
          <div className="faq-question">How do you disclose the report?</div>
          <br />
          <div className="faq-answer">
            We work closely with the client to follow the right disclosure strategy for them.
            Usually we will perform the audit and deliver the initial report to the team. After
            allowing for any necessary fixes or change to the code, we write a blog post about the
            overall result and publish it.
          </div>
        </div>

        <div className="col-md-12">
          <div className="faq-question">What technologies do you specialize in?</div>
          <br />
          <div className="faq-answer">
            We specialize in Ethereum technologies including Solidity, Truffle and EVM assembly. Our
            team are also expert web developers and have the combined experience of many years with
            languages like JavaScript, Rust, and Python.
          </div>
        </div>
      </div>
    </div>
  );
}
