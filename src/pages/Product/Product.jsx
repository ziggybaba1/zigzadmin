import "./product.scss";
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import {Publish} from "@mui/icons-material";

function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
        <div className="productTopLeft">
            <Chart  data={productData} dataKey="Sales" height={100} title="Sales Performance"/>
        </div>
        <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="/img/art.jpg" alt="" />
                    <div className="productName">Araimo Airpod</div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">id:</div>
                        <div className="productInfoValue">123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">sales:</div>
                        <div className="productInfoValue">123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">status:</div>
                        <div className="productInfoValue">active</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">In stock:</div>
                        <div className="productInfoValue">yes</div>
                    </div>

                </div>
            </div>
            </div>
           
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" name="name" id="name" placeholder="Araimo Airpod" />
                        <label htmlFor="">In Stock</label>
                        <select name="stock" id="stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="/img/art.jpg" alt="" />
                            <label htmlFor="file">
                                <Publish className="productUploadIcon" />
                            </label>
                            <input type="file" name="file" id="file" style={{display:'none'}} />
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
