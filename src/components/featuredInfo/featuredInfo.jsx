import "./featuredInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Average Heart Rate</span>
                <div className="featuredActivityContainer">
                    <span className="featuredActivity">120 Bmp</span>
                    <span className="featuredActivityRate">
            -10 Bmp <ArrowDownwardIcon  className="featuredIcon negative"/>
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">User Activity</span>
                <div className="featuredActivityContainer">
                    <span className="featuredActivity">20 Minutes</span>
                    <span className="featuredActivityRate">
            -5 Minutes <ArrowDownwardIcon className="featuredIcon negative"/>
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Risk Score</span>
                <div className="featuredActivityContainer">
                    <span className="featuredActivity">8</span>
                    <span className="featuredActivityRate">
            +3 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}
