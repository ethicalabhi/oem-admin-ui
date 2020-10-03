import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  const [subsidiaryData, setsubsidiary] = useState({
    data: []
  });
  console.log(subsidiaryData.data);


  const fetchData = () => {
    const res = axios.get(`https://cors-anywhere.herokuapp.com/http://13.233.237.220:8091/getOemdetailsById?oem_id=${id}`).then(res => {
      setsubsidiary({ ...subsidiaryData, data: res.data });
    })
  };
  // console.log("subs")



  const [oem, setOem] = useState({
    product_id: "",
    procuct_name: "",
    productCategory: "",
    producy_type: "",
    product_description: "",
    product_model: ""
  });
  console.log(oem);

  const { product_id, procuct_name, productCategory, producy_type, product_description, product_model } = oem;

  const onInputChange = e => {
    setOem({ ...oem, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(`http://13.233.237.220:8091/updateOemDetailsByOemIdAndProductId`, { oem_id: id, productMasterRequestBean: [oem] });
    if (res.status == "200") {
      window.location.reload(false);
    }
  };

  const deleteProduct = async (product_id) => {
    await axios.delete(`http://13.233.237.220:8091/deleteOemDetailsByproductId?product_id=${product_id}`);
    fetchData();
  };

  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">

      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">OEM - Database</h1>
      <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>

                  <th value="product_id">Subsidiary Name</th>
                  <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Subsidiary List</button>
                      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        {subsidiaryData.data.map((oemData, index) => (
                          oemData.oemSubSidiaryEntity.map((oemSub, index) =>
                            oemSub.oem_sub_name && (
                              <a class="dropdown-item" href="#" key={index}>{oemSub.oem_sub_name}</a>
                            )
                          )
                        ))}
                      </div>
                    </div></td>
                  <th value="product_id">RnMCO Name</th>
                  <td>
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">RnMCo List</button>
                      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        {subsidiaryData.data.map((oemData, index) => (
                          oemData.rnMCoBeans.map((oemRnMCo, index) =>
                            oemRnMCo.rnMCoName && (
                              <a className="dropdown-item" href="#" key={index}>{oemRnMCo.rnMCoName}</a>
                            )
                          )
                        ))}
                      </div>
                    </div></td>
                </tr>

              </thead>
            </table>
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th value="product_id">Product ID</th>
                  <th value="product_name">Product Name</th>
                  <th value="product_category">Product Category</th>
                  <th value="product_type">Product Type</th>
                  <th value="product_description">Product Description</th>
                  <th value="product_model">Product Model</th>
                  <th value="">Action</th>
                </tr>
              </thead>
             
              {subsidiaryData && (
                <tbody>
                  {subsidiaryData.data.map((oemData, index) => (
                    oemData.productMasterRequestBean.map((product, index) =>
                      <tr key={index}>
                        <td>{product.product_id}</td>
                        <td>{product.procuct_name}</td>
                        <td>{product.productCategory}</td>
                        <td>{product.producy_type}</td>
                        <td>{product.product_description}</td>
                        <td>{product.product_model}</td>
                        <td><div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button" className="btn btn-success"
                            onClick={() =>
                              setOem({
                                ...oem, product_id: product.product_id,
                                procuct_name: product.procuct_name,
                                productCategory: product.productCategory,
                                producy_type: product.producy_type,
                                product_description: product.product_description,
                                product_model: product.product_model
                              })
                            }
                            data-toggle="modal" data-target="#exampleModal">Edit</button>
                          <button className="btn btn-danger" onClick={() => deleteProduct(product.product_id)}>Delete</button>
                        </div>
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      { /* Modal */}
      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => onSubmit(e)}>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="product_id"
                            value={product_id}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="procuct_name"
                            value={procuct_name}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="productCategory"
                            value={productCategory}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="producy_type"
                            value={producy_type}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="product_description"
                            value={product_description}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="product_model"
                            value={product_model}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <button type="submit" className="btn btn-warning btn-block">Update Product</button>

                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid --> 
  )
}

export default Edit;
