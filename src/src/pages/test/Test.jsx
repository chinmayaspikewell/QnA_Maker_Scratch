import React from "react";
import './test.css';
import { useState } from "react";
import { Rings } from 'react-loader-spinner';
import {Link} from "react-router-dom";
//import PropTypes from "prop-types";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const axios =require('axios');
//axios.defaults.timeout = 4000;


export default function Test() {

  const [tdata, setData] = useState([])
  const[question1, setquestionData] = useState("");
  // const [rows, setRows] = useState(tdata);
  // const [deletedRows, setDeletedRows] = useState([]);
  const [show,setShow] = useState(false);
  const [error,setError] = useState(false);
  const [load,setLoading] = useState(false);
//   const [load1,setLoading1] = useState(true);
// const getDisplay =()=>{
//   console.log(tdata);
// }

const refreshPage = () => {
  setError(false);
  //window.location.reload(false);  
}

// const handleSubmit = event => {
//   event.preventDefault()
//   //console.log(event.question.data); //get value from input with name of firstName
// };
const onGet=()=>{
 // useEffect(() => {
     setShow(false);
     setLoading(true);
    console.log("check")
    const question2 = document.getElementById("question1").value;
    if(question2===""){
      setError(true);
      setLoading(false);
      return;
    }
     axios.post("http://ec2-54-235-41-136.compute-1.amazonaws.com:5000/get_predict",{Query:question1})
      // .then((data) => data.json())ec2-54-196-101-214.compute-1.amazonaws.com
      // .then((data) => setData(data))
      .then(response => {
        setData(response.data)
        console.log(response.data)
        setLoading(false);
        setShow(true);
      })
      .catch((reason) => {
        if (reason.response.status >= 400 || reason.response.status===0) {
          setLoading(false);
          setError(true);
        } else {
          // Handle else
        }
        console.log(reason.message)
        console.log(reason.response.status)
      })
 // }, []);
   
}
  //console.log(tdata);
  return (
    <div className="newUser">
      <div className="userUpdate">
      <h1 className="newUserTitle">Data</h1>
          <span className="userUpdateTitle">Test for QnA </span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Question</label>
                <input
                  type="text"
                  id="question1"
                  placeholder="Enter Query Here"
                  className="userUpdateInput"
                  onChange={(e) => setquestionData(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div >
        <button 
          // type="submit"
          className="newUserButton" id="createBtn" onClick={()=>onGet()}>Get Answer</button>
      </div>
      {show ? 
       <div className="userUpdateLeft">
          <div  className="newUserItem2">
          <h2 className="userUpdateTitle">Answer</h2> 
          <hr/>
          <label><h4>Retrived Answer-1 :</h4><span>{tdata.Answer1}</span></label>
          <br/>
          <label><h5>Retrived from :</h5>{tdata.Retrived1}</label>
          <br/>

          <label><h5>Score-1 :</h5>{tdata.Score1}</label>
          <br/>
          <hr/>
          <br/>

          <label><h4>Retrived Answer-2 :</h4><span>{tdata.Answer2}</span></label>
          <br/>
          <label><h5>Retrived from :</h5>{tdata.Retrived1}</label>
          <br/>
          <label><h5>Score-2 :</h5>{tdata.Score2}</label>
          </div>
          </div>: (<p></p>)
       }
             <div className="indexPage1">
              <Link to="/">
                  <ArrowBackIcon/>
              </Link>
            </div>
       {load ?
       (<div>
         <div className="newUser1">
        <div className="userUpdate1">
          <h1 className="newUserTitle">Searching for Answers!!</h1>
            <span className="userUpdateTitle"> </span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                      <div className="loaderAlign">
                      <Rings
                      height="80"
                      width="80"
                      color="#4fa94d"
                      radius="16"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="rings-loading"
                    />
                    </div>
              </div>
            </div>
          </div>
          </div>
       
       </div>):(<p></p>)}
       {error ? (<div>
        <div className="newUser1">
        <div className="userUpdate1">
          <h1 className="newUserTitle">OPPS !!! :(</h1>
            <span className="userUpdateTitle"> </span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <p>Sorry Something went wrong, try again</p>
                  
                  <div className="topbarIconContainer">
                   <button className ="test"onClick={refreshPage}>OK</button>
                   </div>
                   
              </div>
            </div>
          </div>
          </div>
       </div>):(<p></p>)}
        </div>
     
    </div>
  );
}

 