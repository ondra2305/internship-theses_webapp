// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ToggleContainer } from "./styles/Toggle.styled"


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} >
       <FontAwesomeIcon icon={solid('sun')} />
       <FontAwesomeIcon icon={solid('moon')} />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;