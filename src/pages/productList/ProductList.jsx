import "./productlist.scss";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productList } from "../../dummyData/productList";
import {Link} from "react-router-dom"
import { useState } from "react";

function ProductList() {
    const [data,setData]=useState(productList);

    const handleDelete=(id)=>{
        setData(data.filter((items) =>items.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Name', width: 200, renderCell: (params)=>{
            return (
                <div className="productListProduct">
                    <img className="productListImg" src={params.row.avatar} alt="" />
                    {params.row.name}
                </div>
            )
        }},
        // { field: 'avatar', headerName: 'Avatar', width: 130 },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
            return (
                <>
                <Link to={"/product/"+params.row.id} >
                 <button className="productListEdit">Edit</button>
                 </Link>
                 <DeleteOutline className="productListDel" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        } },
        
      ];
    return (
        <div className="productList">
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

export default ProductList
