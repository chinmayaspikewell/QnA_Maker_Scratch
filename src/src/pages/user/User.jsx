import {
  LocationSearching,
  Publish,
} from "@material-ui/icons";
// import {  PermIdentity} from "@material-ui/icons";
// import {  Calander} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Rings } from 'react-loader-spinner';
import "./user.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from "react";
import { useEffect } from "react";
// import { render } from "@testing-library/react";
import axios from "axios";
import Help from '@material-ui/icons/Help'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ScoreIcon from '@material-ui/icons/Score';

export default function User() {
  var moment = require('moment'); // require
  //const [tableData, setTableData] = useState([]);

 // const [rows, setRows] = useState(tableData);
  //const [deletedRows, setDeletedRows] = useState([]);


  const[question1, setquestionData] = useState("");
  const[answer1, setanswerData] = useState("");
  const[stat, setstatus] = useState(true);
  const[metaa, setmeta] = useState("");
  // const[confiden, setConfidence] = useState();
  // const[answerCreatedOn,setACreatedDateTime]= useState("");
  // const[questionCreatedOn,setQCreatedDateTime]= useState("");
  // const[answerCreatedBy,setAnswerCreatedBy]= useState("");
  // const[questionCreated,setQuestionCreatedBy]= useState("");
  // const[answerUpdatedOn,setAnswerModifiedOn]= useState("");
  // const[questionUpdatedOn,setQuestionModifiedOn]= useState("");
  // const[answerUpdatedBy,setAnswerModifiedBy]= useState("");
  // const[questionUpdatedBy,setAuestionModifiedBy]= useState("");
  const[tableData, setData] = useState([]);
  // const [show,setShow] = useState(false);
  const [error,setError] = useState(false);
  const [load,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [load1,setLoading1] = useState(true);
  
//   var m = moment('Wed, 24 oct 2012 10:09:19 GMT', 'ddd, DD MMM YYYY HH:mm:ss'); // Parse string in local time
// console.log(m.format());
// var mUtc = moment.utc('Wed, 26 jun 2012 10:09:19 GMT', 'ddd, DD MMM YYYY HH:mm:ss'); // Parse string in UTC time
// console.log(mUtc.format());


  let urlElements = window.location.href.split('/');
  useEffect(() => {
    console.log("check")
   
    axios.get("https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs/"+urlElements[urlElements.length-1])
      // .then((data) => data.json())
      // .then((data) => setTableData(data))
      .then(response => {
        setData(response.data)
        console.log(response.data)
        var d = response.data
        setquestionData(d[0].question.questionData);
        setanswerData(d[0].answer.answerData);
        setstatus(d[0].status);
        setmeta(d[0].metaData);
      })
  }, []);
  // setTimeout(console.log())

  

  //console.log(tableData);
  //setTimeout(() => { assign(); }, 5000);
  // var answer;
  // var question;
  // var meta;
  // const assign=() =>{
  //     answer = tableData[0].answer.answerData;
  //     question = tableData[0].question.questionData;
  //     meta =tableData[0].meta;
  // }
//  console.log(tableData[0].answer.answerData);
//   console.log(tableData[0].question.questionData);

const refreshPage = () => {
  window.location.reload(false);
}
//console.log(urlElements[urlElements.length-1]);
const onUpdate =(event)=>{
  event.preventDefault()
  console.log("update Request initiaited");
  console.log(question1,answer1,metaa,stat)
  setLoading(true);
  var t=moment().utc('YYYY-MM-DDTHH:mm:ss:ms+-HH:mm');
  console.log(t.format());
  axios.put("https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs/"+urlElements[urlElements.length-1],{
    id: tableData[0].id,
    question: {
      id: tableData[0].question.id,
      questionData: question1,
      createdDateTime: tableData[0].question.createdDateTime,
      modifiedDateTime: t,
      createdBy: tableData[0].question.createdBy,
      modifiedBy: tableData[0].question.modifiedBy
    },
    answer: {
      id : tableData[0].answer.id,
      answerData: answer1,
      createdDateTime: tableData[0].answer.createdDateTime,
      modifiedDateTime: t,
      createdBy: tableData[0].answer.createdBy,
      modifiedBy: tableData[0].answer.modifiedBy
    },
    confidence: tableData[0].confidence,
    metaData: metaa,
    status: stat
  })
  axios.put("https://api-qnamaker-custom-test-011.azurewebsites.net/api/Questions/"+tableData[0].question.id,{
    id: tableData[0].question.id,
    questionData: question1,
    createdDateTime: tableData[0].question.createdDateTime,
    modifiedDateTime: t,
    createdBy: tableData[0].question.createdBy,
    modifiedBy: tableData[0].question.modifiedBy
  })
  axios.put("https://api-qnamaker-custom-test-011.azurewebsites.net/api/Answers/"+tableData[0].answer.id,{
    id : tableData[0].answer.id,
    answerData: answer1,
    createdDateTime: tableData[0].answer.createdDateTime,
    modifiedDateTime: t,
    createdBy: tableData[0].answer.createdBy,
    modifiedBy: tableData[0].answer.modifiedBy
  })
  .then(response => {
    setLoading(false);
    setSuccess(true);
    setLoading1(false);
    console.log(response.data)
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
}

  return (
  
    <div className="user">
      
      <div className="userTitleContainer">
        
        <h1 className="userTitle">Edit Data</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      {tableData.map((record)=>
      <>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">Data Cell</span>
              <span className="userShowUserTitle">QnA</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Data Details</span>
            <div className="userShowInfo">
              <Help className="userShowIcon" />
              <span className="userShowInfoTitle">{record.question.questionData}</span>
            </div>
            <div className="userShowInfo">
              <QuestionAnswerIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{record.answer.answerData}</span>
            </div>
            <div className="userShowInfo">
              <ScoreIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{record.confidence}</span>
            </div>
            <div className="userShowInfo">
              <Publish className="userShowIcon" />
              <span className="userShowInfoTitle">{record.metaData}</span>
              <div><span className="userShowInfoTitle"></span></div>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Active</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Question</label>
                <input
                  type="text"
                  placeholder="Edit here"
                  className="userUpdateInput"
                  defaultValue={question1}
                  onChange={(e) => setquestionData(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Answer</label>
                <input
                  type="text"
                  placeholder="Answer here"
                  className="userUpdateInput"
                  defaultValue={answer1}
                  onChange={(e) => setanswerData(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>MetaData Tag</label>
                <input
                  type="text"
                  placeholder="id:123"
                  className="userUpdateInput"
                  defaultValue={metaa}
                  onChange={(e) => setmeta(e.target.value)}
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Active/Inactive"
                  className="userUpdateInput"
                  defaultValue={stat}
                  onChange={(e) => setstatus(e.target.value)}
                />
              </div> */}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                {/* <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label> */}
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={onUpdate}>Update</button>
            </div>
          </form>
      <div className="indexPage1">
        <Link to="/">
          <ArrowBackIcon/>
        </Link>
        </div>
      </div>
</div>
</>
      )}
      {load ? (
      
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
           ):(<p></p>)}
      {error ? (<div>
        <div className="newUser1">
        <div className="userUpdate1">
          <h1 className="newUserTitle">OPPS !!! :(</h1>
            <span className="userUpdateTitle"> </span>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <p>Sorry Something went wrong, try again</p>
                  <div className="topbarIconContainer">
                   <button className ="test" onClick={refreshPage}>ok</button>
                   </div>
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
                  <p>Updated Successfully</p>
                  <Link to="/" className="link" >
                  <div className="topbarIconContainer">
                   <button className ="test">ok</button>
                   </div>
                   </Link>
              </div>
            </div>
          </div>
          </div>):(<p></p>)}
    </div>
  );
}

