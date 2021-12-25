import "./widgetbg.scss";

function widgetBg() {
    const Button = ({type})=>{
return <button className={"widgetLgButton " + type}>{type}</button>
    };
    return (
        <div className="widgetBg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
    <div className="tableWrapper">
    <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="/img/avatar.jpg" alt="" />
                <span className="widgetLgName">Kabul James</span>
            </td>
            <td className="widgetLgDate">2, Jun 2021</td>
            <td className="widgetLgAmount">$126,88</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="/img/avatar.jpg" alt="" />
                <span className="widgetLgName">Kabul James</span>
            </td>
            <td className="widgetLgDate">2, Jun 2021</td>
            <td className="widgetLgAmount">$126,88</td>
            <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="/img/avatar.jpg" alt="" />
                <span className="widgetLgName">Kabul James</span>
            </td>
            <td className="widgetLgDate">2, Jun 2021</td>
            <td className="widgetLgAmount">$126,88</td>
            <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="/img/avatar.jpg" alt="" />
                <span className="widgetLgName">Kabul James</span>
            </td>
            <td className="widgetLgDate">2, Jun 2021</td>
            <td className="widgetLgAmount">$126,88</td>
            <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
    </table>
</div>
</div>
    )
}

export default widgetBg

