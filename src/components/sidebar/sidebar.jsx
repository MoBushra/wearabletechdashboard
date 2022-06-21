import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HotelIcon from '@mui/icons-material/Hotel';
import MoodIcon from '@mui/icons-material/Mood';
import MedicationIcon from '@mui/icons-material/Medication';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <HomeIcon/>
                           Home
                      </li>
                      <li className="sidebarListItem">
                          <MonitorHeartIcon/>
                          Heart Rate
                      </li>
                      <li className="sidebarListItem">
                          <HotelIcon/>
                          Sleep
                      </li>
                      <li className="sidebarListItem">
                          <MoodIcon/>
                          Mood
                      </li>
                      <li className="sidebarListItem">
                          <MedicationIcon/>
                          Medication
                      </li>
                      <li className="sidebarListItem">
                          <WarningIcon/>
                          Risk Alert
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    )
}
