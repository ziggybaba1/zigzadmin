import "./userlist.scss";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userList } from "../../dummyData/userList";
import {Link} from "react-router-dom"
import { useState } from "react";

function UserList() {
    const [data,setData]=useState(userList);

    const handleDelete=(id)=>{
        setData(data.filter((items) =>items.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.userName}
                </div>
            )
        }},
        // { field: 'avatar', headerName: 'Avatar', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 130 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
            return (
                <>
                <Link to={"/user/"+params.row.id} >
                 <button className="userListEdit">Edit</button>
                 </Link>
                 <DeleteOutline className="userListDel" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        } },
        
      ];
      
      
    return (
        <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default UserList
