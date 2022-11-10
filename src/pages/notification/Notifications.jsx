import "./notifications.css";
import  { notifyRows } from "../../dummyData";
//import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";


export default function Notifications() {

    const [dat, setData] = useState(notifyRows);


    // const handleDelete = (id) => {
    //     setData(dat.filter((item) => item.id !== id));
    //   };
    return(
    <div className="main">
       <div className="analytics">
       {notifyRows.map((data) =>(
              <div className="featuredItemAnalytics">
                    <div>ID:{data.id}</div>
                  <div><span>TIME:{data.time}</span></div><div>DATE:{data.date}</div>
              <div className="featuredMoneyContainer">
             {data.notify}
            </div>
            </div>
            ))}
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
}