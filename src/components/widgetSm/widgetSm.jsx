import "./widgetsm.scss";
import {Visibility} from "@mui/icons-material"

function widgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="/img/avatar.jpg" alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anne Keller</span>
                    <span className="widgetSmUserTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmButtonIcon" />
                    Display
                </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="/img/avatar.jpg" alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anne Keller</span>
                    <span className="widgetSmUserTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmButtonIcon" />
                    Display
                </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="/img/avatar.jpg" alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anne Keller</span>
                    <span className="widgetSmUserTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmButtonIcon" />
                    Display
                </button>
                </li>
            </ul>
        </div>
    )
}

export default widgetSm

