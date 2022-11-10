import "./issue.css";
import  { issueRows } from "../../dummyData";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";

export default function Issue() {
    const [dat, setData] = useState(issueRows);


    const handleDelete = (id) => {
        setData(dat.filter((item) => item.id !== id));
      };
    
    
    return (
        
        <div className="main">
            {issueRows.map((data) =>(
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
                <div> ID:{data.id}</div>
                </div>
                <div className="featuredMoneyContainer">
                <div>DATE ISSUED : {data.date}</div>
                </div>
                <div className="featuredMoneyContainer">
                <div>TIME ISSUED : {data.time}</div><br/>
                </div>
                <div className="featuredMoneyContainer">
                <div>ISSUE: {data.issue}</div><br/>
                </div>
                <div className="featuredMoneyContainer">
                <div>UID:{data.uid}</div> <br/>
                <div>
                <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(data.id)}
            /></div>
            </div>
            </div>
       </div>
            ))}
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
              id:2<br/>
      date: 10.06.21<br/>
      time: 10:20:34<br/>
      issue: Showing wrong direction in zone 2<br/>
      uid:6 <br/>
           </div>
           </div>
       </div>
      
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
              id:2<br/>
      date: 26.06.21<br/>
      time: 10:20:34<br/>
      issue: transaction has faile for 5th time<br/>
      uid:7 <br/>
           </div>
           </div>
       </div>
       </div>
    );
}


/*import "./issue.css";
import {issueRows} from "../../dummyData"
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";


export default function Issue() {
    const [data,setData] = useState([issueRows]);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    return(
        
        <div className="main">
          <div className="analytics">
              <div className="featuredItemAnalytics">
                  <div className="featuredMoneyContainer">
                      <div>
                       issue id:{data.id}<br/>
                      </div>
            issued on:{data.time}{data.date}<br/>
            issued by:user {data.uid}<br/>
            issue : {data.issue}
            <DeleteOutline
              className="userListDelete"
              onClick={() => (data.id)}/>
            </div>
            </div>
       </div>
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
           1 module is under maintainance 
           </div>
           </div>
       </div>
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
            LoraWan mod 2 stablised
       </div>
       </div>
       </div>
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
           $10000 transferred to base account 
           </div>
           </div>
       </div>
       <div className="analytics">
       <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
           6 new slots added 
           </div>
           </div>
       </div>
       </div>
    );
}*/