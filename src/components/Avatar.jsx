import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ image, firstName, lastName, star }) => {

  return <div className={star ? "star" : ""}>
    <img src={image ? image : "https://www.drupal.org/files/issues/default-avatar.png"} alt={firstName + " " + lastName.toUpperCase()} />
    <div>{firstName}</div>
    <div>{lastName.toUpperCase()}</div>
  </div>
}

Avatar.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default Avatar;