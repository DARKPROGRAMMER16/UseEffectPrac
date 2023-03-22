import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getdata = async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();

//  fetch("https://jsonplaceholder.typicode.com/users"}).then((res) => {
//         return res.json();
//     }).then((val) => {
//         // console.log(val);
//         setData(val);
//     })

    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getdata();
  },[]);

  return <>

    {/* <button onClick={() => getdata()}>get data</button> */}
    <h1>name - email</h1>
    {
        data.map((dt) => {
            return(
                <h1>{dt.name} - {dt.email}</h1>
            )
        })
    }
    
  </>;
};

export default Home;
