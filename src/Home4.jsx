import React, { useState } from 'react'
import { useEffect } from 'react'

const Home4 = () => {

    const[data1, setData1] = useState("one");
    const[data2, setData2] = useState("two");

    useEffect(() => {
        console.log("hello 2");
    },[data2]);

  return (
    <>
        <button onClick={() => setData1("four")}>one</button>
        <button onClick={() => setData2("three")}>two</button>
        <h1>hello from geekster {data1}  ------  {data2}</h1>
    </>
  )
}

export default Home4