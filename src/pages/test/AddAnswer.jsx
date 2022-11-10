import React from "react";
//import { CardHeader,Card,Badge,Accordion } from '@material-ui/core';
import { FormControl,FormLabel,FormGroup} from '@material-ui/core';
import { useState } from "react";
export const AddAnswer = (props) => {
  const [answer, setAnswer] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!answer) {
      alert("Answer cannot be blank!");
    } else {
      props.addAnswer(answer, props.item);
      setAnswer("");
    }
  };
  return (
    <div>
      <FormControl onSubmit={submit}>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Your Answer</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </FormGroup>
        <button className="btn btn-sm btn-success" type="submit">
          Add Answer
        </button>
      </FormControl>
    </div>
  );
};