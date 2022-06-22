import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Chart from "../../components/chart/chart";
import { userData } from "../../data/dummyData";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="Heart Rate" grid dataKey="Active User"/>
        </div>
    )
}
