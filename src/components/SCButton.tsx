// import React from 'react'
import React, {useState} from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
    background: red;
    color: white;
    padding: 10px 15px;
    display: inline-block;
    cursor: pointer;
`

export const SCButton = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>SCButton</div>
      {/* <StyledButton>SCButton</StyledButton> */}
      <StyledButton onClick={()=>setCount(count + 1)}>Click to increment</StyledButton>
      <p>Count: {count}</p>
    </>
    // <div>SCButton</div>
  )
}