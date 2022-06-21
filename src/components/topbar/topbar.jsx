import React from "react";
import "./topbar.css";
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HotelIcon from '@mui/icons-material/Hotel';
import MoodIcon from '@mui/icons-material/Mood';
import MedicationIcon from '@mui/icons-material/Medication';
import WarningIcon from '@mui/icons-material/Warning';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Health Dashboard</span>
                </div>
                {/*<div className="topRight">*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <HomeIcon/>*/}
                {/*        <span className="topIconBadge">2</span>*/}
                {/*    </div>*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <MonitorHeartIcon/>*/}
                {/*        <span className="topIconBadge">2</span>*/}
                {/*    </div>*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <HotelIcon/>*/}
                {/*        <span className="topIconBadge">2</span>*/}
                {/*    </div>*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <MoodIcon/>*/}
                {/*        <span className="topIconBadge">2</span>*/}
                {/*    </div>*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <MedicationIcon/>*/}
                {/*        <span className="topIconBadge">2</span>*/}
                {/*    </div>*/}
                {/*    <div className="topbarIconContainer">*/}
                {/*        <WarningIcon/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
