import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Form inline>
        <h2>Input your Birthday!</h2>
        <FormControl type="date"></FormControl>
        {"  "}
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default App;
