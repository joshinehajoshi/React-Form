import React, { useState } from 'react';
import './App.css';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const App = () => {

  const [firstName, setFirstName] = useState("");
  const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

const submitHandler = (e) => {
  e.preventDefault();
  if(firstName && branch && age && city && email && people) {
    const person = {firstName, branch, age, city, email, people};
    setPeople((people) => {
      return [...people, person];
    });
    setFirstName('');
    setBranch('');
    setAge('');
    setCity('');
    setEmail('');


  }else {
    console.log("Error")
  }
}

  return (
    <>
    <article>
    <form className="form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="firstName">Name </label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label htmlFor="branch">Branch </label>
        <input type="text" id="branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label htmlFor="age">Age </label>
        <input type="text" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label htmlFor="city">City </label>
        <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email </label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <button type="submit">Add Person</button>
    </form>
    {people.map((pp) => {
      const {firstName,branch, age, city, email} = pp;
      return(
        <div className="textc">
          <h3>{firstName}</h3>
          <h3>{branch}</h3>
          <h3>{age}</h3>
          <h3>{city}</h3>
          <h3>{email}</h3>
        </div>
      )
    })}
    </article>
    </>
  )
};

export default App;