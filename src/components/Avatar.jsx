import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ image, firstName, lastName }) => {

  return <div className="Avatar">
    <img src={image} alt={firstName + " " + lastName.toUpperCase()} />
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