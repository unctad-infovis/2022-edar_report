import React from 'react';
import PropTypes from 'prop-types';

function Downloadbutton({ href, text }) {
  return (
    <div><a type="button" href={href} target="_blank" rel="noreferrer">{text}</a></div>
  );
}

Downloadbutton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Downloadbutton;
