import "./sidebar.scss";
import {Link} from "react-router-dom";
import {LineStyle,Timeline,TrendingUp,PersonOutlineOutlined,StorefrontOutlined,AttachMoneyOutlined,BarChartOutlined,EmailOutlined,DynamicFeedOutlined,ChatBubbleOutline, WorkOutline,ErrorOutlineOutlined} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

function Sidebar({show="no-active"}) {
    const location = useLocation();
    const { pathname } = location;

    const NavItem = (props) => {
        const { title, link, liClass, linkClass, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
        const navItemClassName = pathname === link? "active" : "";
    
        return (
            <Link to={link} className={linkClass}>
            <li className={liClass+" "+navItemClassName}>
               {icon}
                {title}
            </li>
            </Link>
        );
      };

    return (
        <div className={"sidebar "+show}>
            <div className="sideWrapper overlay-content">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                <NavItem link={'/'} liClass="sidebarListItem" linkClass="link" icon={ <LineStyle className="sidebarIcon" />} title="Home"  />
                <NavItem link={'/analytics'} liClass="sidebarListItem" linkClass="link" icon={  <Timeline className="sidebarIcon" />} title="Analytics"  />
                <NavItem link={'/sales'} liClass="sidebarListItem" linkClass="link" icon={ <TrendingUp className="sidebarIcon" />} title="Sales"  />        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <NavItem link={'/users'} liClass="sidebarListItem" linkClass="link" icon={ <PersonOutlineOutlined className="sidebarIcon" />} title="Users"  />        
                    <NavItem link={'/products'} liClass="sidebarListItem" linkClass="link" icon={  <StorefrontOutlined className="sidebarIcon" />} title="Products"  />        
                    <NavItem link={'/transaction'} liClass="sidebarListItem" linkClass="link" icon={  <AttachMoneyOutlined className="sidebarIcon" />} title="Transactions"  />   
                    <NavItem link={'/reports'} liClass="sidebarListItem" linkClass="link" icon={ <BarChartOutlined className="sidebarIcon" />} title="Reports"  />             
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                    <NavItem link={'/mail'} liClass="sidebarListItem" linkClass="link" icon={  <EmailOutlined className="sidebarIcon" />} title="Mail"  />             
                    <NavItem link={'/feedback'} liClass="sidebarListItem" linkClass="link" icon={  <DynamicFeedOutlined className="sidebarIcon" />} title="Feedback"  />             
                    <NavItem link={'/messages'} liClass="sidebarListItem" linkClass="link" icon={  <ChatBubbleOutline className="sidebarIcon" />} title="Messages"  />             
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                    <NavItem link={'/manage'} liClass="sidebarListItem" linkClass="link" icon={  <WorkOutline className="sidebarIcon" />} title="Manage"  /> 
                    <NavItem link={'/analytics'} liClass="sidebarListItem" linkClass="link" icon={  <Timeline className="sidebarIcon" />} title="Analytics"  /> 
                    <NavItem link={'/reports'} liClass="sidebarListItem" linkClass="link" icon={  <ErrorOutlineOutlined className="sidebarIcon" />} title="Reports"  /> 
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Sidebar
