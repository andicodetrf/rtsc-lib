// import React from 'react'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
    background: red;
    color: white;
    padding: 10px 15px;
    display: inline-block;
    cursor: pointer;
`

interface ISCButton {
  appData?: string;
}

interface IData {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
  [key:string] : any;
}

export const SCButton = ({ appData }: ISCButton) => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState<IData>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log('fetched', json)
        setData(json)
      })
  }, [])

  return (
    <>
      <div>SCButton</div>
      {/* <StyledButton>SCButton</StyledButton> */}
      <StyledButton onClick={() => setCount(count + 1)}>Click to increment</StyledButton>
      <p>Count: {count}</p>
      <h3>Fetched in rtsc-lib module: {data?.title}</h3>
      {appData && <h3>Dynamic data from app: {appData}</h3>}
    </>
  )
}