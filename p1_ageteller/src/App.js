import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AgeTeller from "./components/AgeTeller";
import "./App.css";

const App = () => {
  const [newDate, setNewDate] = useState("");
  const [birthday, setBirthDay] = useState("1992-06-21");
  const [ageDiv, setAgeDiv] = useState(false);
  const changeBirthDay = () => {
    console.log(newDate);
    setBirthDay(newDate);
    setAgeDiv(!ageDiv);
  };
  return (
    <>
      <div className="App">
        <Form>
          <h2>Input your Birthday!</h2>
          <Form.Control
            type="date"
            onChange={(event) => setNewDate(event.target.value)}
          ></Form.Control>
          <br />
          <Button onClick={() => changeBirthDay()}>Submit</Button>
        </Form>
      </div>
      {ageDiv && (
        <div className="fade-in">
          <AgeTeller date={birthday} />
        </div>
      )}
    </>
  );
};

export default App;
