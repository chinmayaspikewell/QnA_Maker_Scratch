import { useState } from "react";
import { FormControl,FormGroup,FormHelperText} from '@material-ui/core';
//import {Card,Badge,Accordion} from '@material-ui/core';
export default function AddQuestion(props) {
  const [question, setQuestion] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!question) {
      alert("Question cannot be blank!");
    } else {
      props.addQuestion(question);
      setQuestion("");
    }
  };
  return (
    <div>
      <FormControl onSubmit={submit}>
        <FormGroup controlId="formBasicEmail">
          <FormControl
            type="text"
            placeholder="Type here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <FormHelperText className="text-muted">
          Submit your question here...
          </FormHelperText>
        </FormGroup>
        <button type="submit" className="btn btn-sm btn-success">
          Post
        </button>
      </FormControl>
    </div>
  );
}
