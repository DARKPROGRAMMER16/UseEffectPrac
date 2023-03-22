import React, { useState } from "react";

const Home3 = () => {
  const [names, setNames] = useState([]);
  const [iname, setIname] = useState("");
  return (
    <>
      <h1>hello home 3</h1>
      <input
        type="text"
        value={iname}
        onChange={(e) => setIname(e.target.value)}
      />
      <button
        onClick={() => {
          setNames((prev) => [...prev, iname]); // setname(["superman", "rajat", "shruti", iname])
          setIname("");
        }}
      >
        Add data
      </button>

        <ol>
            {
                names.map((nm) => {
                    return(
                        <li style={{textDecoration:"line-through"}}> {nm}</li>
                    )
                })
            }
        </ol>
      {/* {names.map((nm, index) => {
        return <h3>{index+1} {nm}</h3>;
      })} */}
    </>
  );
};

export default Home3;
