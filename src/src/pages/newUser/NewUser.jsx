
import "./newUser.css";
import { useState } from "react";
import { Rings } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { ExitToApp } from '@material-ui/icons';
// import { AxiosResponse, AxiosError } from 'axios'
// import {useRef, useEffect} from 'react';

const axios =require('axios');
export default function NewUser() {


  // const [show,setShow] = useState(false);
  const [error,setError] = useState(false);
  const [load,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [load1,setLoading1] = useState(true);
  
  
  const handleSubmit = event => {
    event.preventDefault()
    //console.log(event.question.data); //get value from input with name of firstName
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

 
  // const confirmPost=()=>
  // {
  //   alert("Data Added");
  // }
  
  // btn.addEventListener("click", () => {
    const onPost=() =>{ 
    setLoading1(false)
    setLoading(true);
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const tagg = document.getElementById("tags").value;
    //const btn = document.getElementById("createBtn");
    if (question === "" || answer === "" || tagg === "") {
      setError(true);
      setLoading(false);
      //setLoading1(true);
      return ;
    }
    
  console.log(answer);
  console.log(question);
  console.log(tagg);


//https://blog.logrocket.com/understanding-axios-post-requests/

//((document.getElementById("question")||{}).value)||"",
var node =[{
  question:{
     questionData: question,
     createdDateTime :"2005-03-15T03:56:25.872Z",
     modifiedDateTime:"2005-03-15T03:56:25.872Z",
     createdBy: "frontendcheck",
     modifiedBy: "frontendcheck"
  },
  answer:{
     answerData: answer ,
     createdDateTime :"2005-03-15T03:56:25.872Z",
     modifiedDateTime:"2005-03-15T03:56:25.872Z",
     createdBy: "frontendcheck",
     modifiedBy: "frontendcheck"
  },
    confidence: -35339133.10283863,
    metaData:tagg,
    status: true
  },
] 
  //var json = JSON.stringify(node);
  axios.post('https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs',node,{
    headers: {
        'Content-Type': 'application/json'
        }
  })
  .then(function (response){
    if(response.status === 200){
    setLoading(false);
    setSuccess(true);
    setLoading1(false);
    console.log(response);
  }
})
  .catch((reason) => {
    if (reason.response.status === 400) {
      setLoading(false);
      setLoading1(false)
      setError(true);
    } else {
      // Handle else
    }
    console.log(reason.message)
  })
  console.log('POST');
 // confirmPost();
};

// const onGet = () =>{
//     axios.get('https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs')
//     .then(function (response){
//       console.log(response.data);
//     });
//     console.log('GET')
    
//   };
  return (
    
    <div className="newUser">
      {load1 ? (
        <>
      <div className="userUpdate">
      <h1 className="newUserTitle">New Data</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Question</label>
         
          <input id ="question" type="text" placeholder="Enter Question here!" />
        </div>
        <div className="newUserItem">
          <label>Answer</label>
        
          <input id="answer" type="text" placeholder="Enter Answer Here"  />
        </div>
       
        <div className="newUserItem">
          <label>Active</label>
       
          <select className="newUserSelect" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Meta tags <h6>id:1234</h6><h6> metaId:12344</h6></label>
          <input id ="tags"type="text" placeholder="id:1234"  />
        </div>
        
      </form>
      <div >
        <button 
          // type="submit"
          className="newUserButton" id="createBtn" onClick={()=>onPost()}>Create</button>
      </div>
      </div>
      <div className="indexPage1">
 
        <Link to="/">
    
          <ArrowBackIcon/>

        </Link>
      </div>
</>
      ):(<p></p>)}
      {load ? (
      <div className="userUpdate2">
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
      </div>):(<p></p>)}
      {error ? (<div>
        <div className="newUser1">
        <div className="userUpdate1">
          <h1 className="newUserTitle">OPPS !!! :(</h1>
            <span className="userUpdateTitle"> </span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <p>Sorry Something went wrong, try again</p>
                  <Link to="/newUser" className="link">
                  <div className="topbarIconContainer">
                   <button className ="test" onClick={refreshPage}>OK</button>
                   </div>
                   </Link>
              </div>
            </div>
          </div>
          </div>
       </div>):(<p></p>)}
       {success?(<div className="newUser1">
        <div className="userUpdate1">
          <h1 className="newUserTitle">Yup Its Done !!! :)</h1>
            <span className="userUpdateTitle"> </span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <p>Added Successfully</p>
                  <Link to="/" className="link" >
                  <div className="topbarIconContainer">
                   <button className ="test">OK</button>
                   </div>
                   </Link>
              </div>
            </div>
          </div>
          </div>):(<p></p>)}
    </div>
  );
}
