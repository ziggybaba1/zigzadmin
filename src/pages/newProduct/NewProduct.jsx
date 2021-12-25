import "./newproduct.scss";

function NewProduct() {
    return (
        <div className="newProduct">
              <h1 className="newProductTitle">New Product</h1>
            <form  className="newProductForm">
                <div className="newProductItemUpload">
                    <label htmlFor="">Product Image</label>
                    <input type="file" name="" id="" placeholder="Ayuba4" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="" id="" placeholder="" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock Quantity</label>
                    <input type="number" name="" id="" placeholder="" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">In Stock</label>
                    <select name="" id="" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Active</label>
                    <select name="" id="" className="newProductSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
