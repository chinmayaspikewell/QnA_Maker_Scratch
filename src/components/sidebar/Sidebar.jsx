import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
//   LocalParking
// } from "@material-ui/icons";
import {PermIdentity} from "@material-ui/icons";
import { Link } from "react-router-dom";

/* function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
}*/

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <PermIdentity className="sidebarIcon" />
                Knowledge_Base
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            
          </ul>
        </div>
      </div>
      </div>
    
  );
}
