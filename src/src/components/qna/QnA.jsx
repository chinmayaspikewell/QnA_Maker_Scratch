import { useState,useEffect } from 'react';
import { CardContent } from '@material-ui/core';
import { Card} from '@material-ui/core';
import './QnA.css';
//import { Link, Router } from "react-router-dom";
import Test from '../../pages/test/Test';

export default function QnA() {
  let initDatabase;
  if (localStorage.getItem("database") === null) {
    initDatabase = [];
  }
  else {
    initDatabase = JSON.parse(localStorage.getItem("database"));
  }

  const addQuestion = (question) =>{
    console.log('inserting "'+question+'"');
    var item = {};
    item.question = question;
    item.answers = [];
    setDatabase([...database, item]);
  }

  const deleteQuestion = (item) =>{
    console.log('deleting ',item);
    setDatabase(database.filter((element) => {
        return element !== item;
      }));
      console.log("deleted", item)
  }

  const deleteAnswer = (answer,item) =>{
    console.log('deleting ',answer);
    for(var entry in database){
      var ques = database[entry].question;
      if(ques === item.question && database[entry].answers !== undefined){
        database[entry].answers = database[entry].answers.filter((ele) =>{
            return ele !== answer;
        });
        break;
      }
    }
    setDatabase([...database]);
    console.log("deleted", answer);
  }

  const addAnswer = (answer,item) =>{
    console.log('adding "'+answer+'" to  "'+item.question+'"');
    for(var entry in database){
      var ques = database[entry].question;
      if(ques === item.question){
        database[entry].answers.push(answer);
      }
    }
    setDatabase([...database]);
    console.log('Answer Added!');
  }
  const [database, setDatabase] = useState(initDatabase);
  useEffect(() => {
    localStorage.setItem("database", JSON.stringify(database));
  }, [database])

  return (
    <Card>
    <CardContent> 
      <Test name="Welcome to the Forum!" addQuestion={addQuestion} deleteQuestion={deleteQuestion} addAnswer={addAnswer} database={database} deleteAnswer={deleteAnswer}/> 
    </CardContent>
    </Card>
   );
}

/** <Test name="Welcome to the Forum!" addQuestion={addQuestion} deleteQuestion={deleteQuestion} addAnswer={addAnswer} database={database} deleteAnswer={deleteAnswer}/> */