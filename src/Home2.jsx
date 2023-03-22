import React, { useState } from 'react'

const Home2 = () => {
    const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  const [data, setData] = useState({
    Sname: "",
    Sage: 0,
    Semail: "",
  });
  return (
    <>
      {/* <form> */}
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={() => {
          setData({
            Sname: name,
            Sage: age,
            Semail: email,
          });
          setName("");
          setAge(0);
          setEmail("");
        }}
      >
        add data
      </button>
      {/* </form> */}

      <h1>
        my name is {name}, my age is {age} and my email is{" "}
        {email}.
      </h1>


      {/* <Home/> */}
    </>
  );
}

export default Home2