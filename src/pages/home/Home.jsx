import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.scss";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetBg from "../../components/widgetBg/widgetBg";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} dataKey="amt" height={200} title={'User Analytics'} />
            <div className="homeWidget">
           <WidgetSm />
           <WidgetBg />
            </div>
        </div>
    )
}

export default Home
