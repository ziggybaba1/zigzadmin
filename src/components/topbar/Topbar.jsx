import "./topbar.scss";
import {NotificationsNone,Language,Settings, Menu} from "@mui/icons-material"
import { useState } from "react";

function Topbar({onClickMenuNav}) {
const [click,setClick]=useState("active");
    const clickMenu=()=>{
        setClick(click==="active"?"non-active":"active")
        onClickMenuNav(click)
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">zigzadmin</span>
                    <div className="mobilePush">
                        <Menu onClick={clickMenu} />
                    </div>
                    </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                       
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="/img/avatar.jpg" alt="" className="topAvatar" />
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
