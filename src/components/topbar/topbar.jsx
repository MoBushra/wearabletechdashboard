import React from "react";
import "./topbar.css";
import HomeIcon from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Health Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <HomeIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}
