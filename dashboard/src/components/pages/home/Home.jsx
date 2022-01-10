import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import WidgetSmall from "../../widgetSm/WidgetSmall"
import './home.css'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <div className="homeWidgets">
                <WidgetSmall />
            </div>
        </div>
    )
}