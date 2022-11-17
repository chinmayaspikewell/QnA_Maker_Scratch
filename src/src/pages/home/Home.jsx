import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import TopFeaturedInfo from "../../components/topFeaturedInfo/TopFeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <TopFeaturedInfo />
      <FeaturedInfo />
      <Chart className ="charts" data={userData} title="User Analytics" grid dataKey="active"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
