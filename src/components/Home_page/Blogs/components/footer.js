import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container"></div>
      <h1 className="footer-text">{props.text}</h1>
      <a
        href={props.View}
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        View&gt;&gt;
      </a>
    </footer>
  )
}

Footer.defaultProps = {
  text: 'Published Blog',
  View: 'https://example.com',
  rootClassName: '',
}

Footer.propTypes = {
  text: PropTypes.string,
  View: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
