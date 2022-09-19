import React from 'react';

import { Back } from './button.styles.jsx';

const Button = ({ back }) => {
  return (
    <Back onClick={back}>
      <svg width="18" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
      </svg>{' '}
      back
    </Back>
  );
};

export default Button;
