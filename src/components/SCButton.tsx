import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
    background: red;
    color: white;
    padding: 10px 15px;
    display: inline-block;
`

export const SCButton = () => {
  return (
    <StyledButton>SCButton</StyledButton>
    // <div>SCButton</div>
  )
}