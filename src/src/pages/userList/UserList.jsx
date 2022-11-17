import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline} from "@material-ui/icons";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { dataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Rings } from 'react-loader-spinner';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const axios =require('axios');
export default function UserList() {
  

  const [show,setShow] = useState(false);
// const [error,setError] = useState(false);
const [load,setLoading] = useState(true);
// const [success,setSuccess] = useState(false);
// const [load1,setLoading1] = useState(true);

  const history = useHistory();
  const [tableData, setTableData] = useState([])


  useEffect(() => {
    setLoading(true);
    axios.get("https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs/")
    .then(response => {
      setTableData(response.data)
      console.log(response.data)
      setLoading(false);
      setShow(true);
    })
  }, [])

  //console.log(tableData);

// const [status, setStatus] = useState('');
// const [questionData, setQuestion] = useState("");
// const [answerData, setAnswer] = useState("");
// const [meta, setMeta] = useState("");


const addBalHandler = (id,questionDat,answerDat,date,admin,metaD,confidenceD) => {
  
  axios({
    method: "PUT",
    url: `https://api-qnamaker-custom-test-011.azurewebsites.net/api/QnaPairs/${id}`,
    question: {
      id: id,
      questionData: questionDat,
      createdBy: admin,
      createdOn: date,
      modifiedDate: date,
      ModifiedBy :admin,
    },
    answer: {
      id: id,
      answerData: answerDat,
      createdBy: admin,
      createdOn: date,
      modifiedDate: date,
      ModifiedBy :admin,
    },
    meta:metaD,
    confidence:confidenceD,
  }).then((res) => {
    history.push(`/success/` + id);
    console.log(res.data);
  });
};





const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
  this.setState(state => {
    const rows = state.rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      rows[i] = { ...rows[i], ...updated };
    }
    return { rows };
  });
};
  //  console.log(tableData);
    const [pageSize, setPageSize] = useState(10);
   

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };
const confirmDelete=(id)=>
{
  var con=window.confirm("Are you sure you want to delete?");
  if(con){
    handleDelete(id);
  }else{
    return false;
  }
}

const [page, setPage] = useState(2);
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  console.log("Event",event.target.value);
  setPage(0);
};



// var btnpa =document.getElementById('remove');

// let vari = 0;
//  const addNode = ()=>{
//   document.getElementById("list").innerHTML += `<div>${vari}<button id ="var${vari} onclick="
//   deleteNode(var${vari});">Delete</button></div>`;
//   vari++;
//   if(vari ===1000)
//     vari=0;
// }

// function deleteNode(id){
//    var del=id.parentElement;
//    del.remove();
//    var u =0;
// }
 
 
  
  /*function addNode() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello");
    document.body.appendChild(x);
}*/
let columns=[];
let width = window.innerWidth;
if(width>480 && width<1200){
  columns = [
   
    { field: "id", headerName: "ID",
    // flex:1,
    width: 90,
    renderCell: (params) => {
      return (
        <>
        <div className="userListUser">
         {params.row.id}
        </div>

        </>
      );
    },
  },
    {
      field: "question.questionData",
      headerName: "Question",
       width: 400,
      //minWidth:100,
      // flex:3,
      filterable: true,
     // editable:true,
      valueParser: (params) => {
        return params.data;
      },
      renderCell: (params) => {
        var d = params.row.question
        return (
          <>
          <div className="userListUser"  onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.question.modifiedOn,params.row.question.modifiedBy)}>
            {d.questionData}      
            
          </div>
         
           </>
        );
      },
    },
    {
      field: "answer",
      headerName: "Answer",
      //minWidth: 50,
       width: 400,

      filterable: true,

      //editable:true,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser" onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.answer.modifiedOn,params.row.answer.modifiedBy)}>
            {params.row.answer.answerData} 

            </div>
            <div className="userListUser">
            <div id="list">
            </div>
            </div>
            </>
        );
      },    
    },

   { 
      field: "metaData",
      headerName: "MetaData",
      //minWidth: 90,
      width: 200,
   
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.metaData}
            {/* { <DeleteOutline onClick={() => confirmDelete(params.row.metaData.uid)}/>} */}
          </div>
          <div className="userListUser">
          {params.row.metaData.recid}
        </div>
         </>          
        );
      },
    },
   
    
    {
      field: "status",
      headerName: "Status",
      //minWidth: 90,
       width: 120,
    
      //editable:true,
      renderCell: (params) => {
        if (params.row.status === false){
        return (
          <div  className="userListUser">
              <button className="inactive" >inactive</button>
          </div>
        );       
      }
      else{
        return(
          <div className="userListUser">
              <button className="active" >active</button>
          </div>
        );
      }
  },
  },
    {
      field: "action",
      headerName: "Action",
      //minWidth: 100,
       width: 120,
  
      renderCell: (params) => {
        return (
          <div className="userListDelete2">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              
              onClick={() => confirmDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
}
else if (width < 480) {
  columns = [
   
    { field: "id", headerName: "ID",
    // flex:1,
    width: 89,
    renderCell: (params) => {
      return (
        <>
        <div className="userListUser">
         {params.row.id}
        </div>

        </>
      );
    },
  },
    {
      field: "question.questionData",
      headerName: "Question",
       width: 132,
      //minWidth:100,
      // flex:3,
      filterable: true,
     // editable:true,
      valueParser: (params) => {
        return params.data;
      },
      renderCell: (params) => {
        var d = params.row.question
        return (
          <>
          <div className="userListUser"  onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.question.modifiedOn,params.row.question.modifiedBy)}>
            {d.questionData}      
            
          </div>
         
           </>
        );
      },
    },
    {
      field: "answer",
      headerName: "Answer",
      //minWidth: 50,
       width: 132,

      filterable: true,

      //editable:true,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser" onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.answer.modifiedOn,params.row.answer.modifiedBy)}>
            {params.row.answer.answerData} 

            </div>
            <div className="userListUser">
            <div id="list">
            </div>
            </div>
            </>
        );
      },    
    },

   { 
      field: "metaData",
      headerName: "MetaData",
      //minWidth: 90,
      width: 140,
   
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.metaData}
            {/* { <DeleteOutline onClick={() => confirmDelete(params.row.metaData.uid)}/>} */}
          </div>
          <div className="userListUser">
          {params.row.metaData.recid}
        </div>
         </>          
        );
      },
    },
   
    
    {
      field: "status",
      headerName: "Status",
      //minWidth: 90,
       width: 115,
    
      //editable:true,
      renderCell: (params) => {
        if (params.row.status === false){
        return (
          <div  className="userListUser">
              <button className="inactive" >inactive</button>
          </div>
        );       
      }
      else{
        return(
          <div className="userListUser">
              <button className="active" >active</button>
          </div>
        );
      }
  },
  },
    {
      field: "action",
      headerName: "Action",
      //minWidth: 100,
       width: 120,
  
      renderCell: (params) => {
        return (
          <div className="userListDelete2">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              
              onClick={() => confirmDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
}else{
   columns = [
   
    { field: "id", headerName: "ID",
    // flex:1,
    width: 100,
    renderCell: (params) => {
      return (
        <>
        <div className="userListUserSl">
         {params.row.id}
        </div>

        </>
      );
    },
  },
    {
      field: "question.questionData",
      headerName: "Question",
       width: 500,
      //minWidth:100,
      // flex:3,
      filterable: true,
     // editable:true,
      valueParser: (params) => {
        return params.data;
      },
      renderCell: (params) => {
        var d = params.row.question
        return (
          <>
          <div className="userListUser"  onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.question.modifiedOn,params.row.question.modifiedBy)}>
            {d.questionData}      
            
          </div>
         
           </>
        );
      },
    },
    {
      field: "answer",
      headerName: "Answer",
      //minWidth: 50,
       width: 500,

      filterable: true,

      //editable:true,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser" onDoubleClick={()=> addBalHandler(params.row.id,params.row.question.questionData,params.row.answer.answerData,params.row.answer.modifiedOn,params.row.answer.modifiedBy)}>
            {params.row.answer.answerData} 

            </div>
            <div className="userListUser">
            <div id="list">
            </div>
            </div>
            </>
        );
      },    
    },

   { 
      field: "metaData",
      headerName: "MetaData",
      //minWidth: 90,
      width: 250,
   
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.metaData}
            {/* { <DeleteOutline onClick={() => confirmDelete(params.row.metaData.uid)}/>} */}
          </div>
          <div className="userListUser">
          {params.row.metaData.recid}
        </div>
         </>          
        );
      },
    },
   
    
    {
      field: "status",
      headerName: "Status",
      //minWidth: 90,
       width: 120,
    
      //editable:true,
      renderCell: (params) => {
        if (params.row.status === false){
        return (
          <div  className="userListUser">
              <button className="inactive" >inactive</button>
          </div>
        );       
      }
      else{
        return(
          <div className="userListUser">
              <button className="active" >active</button>
          </div>
        );
      }
  },
  },
    {
      field: "action",
      headerName: "Action",
      //minWidth: 100,
       width: 120,
  
      renderCell: (params) => {
        return (
          <div className="userListDelete2">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              
              onClick={() => confirmDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
}
  return (
    <>
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
            item-allign="center"
          />
          </div>
       
      ):(<p></p>)}
    <div className="userList">
      {show ?(
      <>
      
      <DataGrid sm={6} xs={12} md={6} lg={6} xl={6} 
        // rowsPerPageOptions={[5, 10, 20]}
        //sx={{height: { md: 450, xs: 350 }, width: '35%',}}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        // rowsPerPageOptions={[5, 10, 20]}
        // pagination
        rows={tableData}
        disableSelectionOnClick
        columns={columns}
        rowHeight={200}
        //pageSize={8}
        //page={page}

        onPageChange={handleChangePage}
        // rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        experimentalFeatures={{ newEditingApi: true }}
        rowGetter={i => setTableData.rows[i]}
        rowsCount={tableData.count}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
        //checkboxSelection={true}
      />
      {/* 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      <div class="indexPage">
 
            <Link to="/">
            
            <ArrowBackIcon/>

            </Link>
      </div> */}
      </>):(<p></p>)}
    </div>
    </>
  );
}