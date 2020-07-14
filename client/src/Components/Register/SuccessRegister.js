import React, { useState } from 'react';

export default (props) => {
  return (
    <div>
      Successfully registered. Please check your email at {props.email} for confirmation
      link.
    </div>
  );
};
