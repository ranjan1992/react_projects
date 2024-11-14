import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AgeTeller from "./components/AgeTeller";
import "./App.css";

const App = () => {
  const [newDate, setNewDate] = useState("");
  const [birthday, setBirthDay] = useState("1992-06-21");
  const changeBirthDay = () => {
    console.log(newDate);
    setBirthDay(newDate);
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
          {"  "}
          <Button onClick={() => changeBirthDay()}>Submit</Button>
        </Form>
      </div>
      <AgeTeller date={birthday} />
    </>
  );
};

export default App;
