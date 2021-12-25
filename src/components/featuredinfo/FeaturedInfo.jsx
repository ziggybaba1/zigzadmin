import "./featuredinfo.scss";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,200</span>
                    <span className="featuredMoneyRate">
                        -11.2 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,400</span>
                    <span className="featuredMoneyRate">
                        -11.2 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,000</span>
                    <span className="featuredMoneyRate">
                        +11.2 <ArrowUpward className="featuredIcon positive" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
