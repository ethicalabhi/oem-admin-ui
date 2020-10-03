import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tables = () => {

  const [oem, setOem] = useState({
    oemData: []
  });
  console.log(oem.oemData);

  const { oemData } = oem;

  const [oem_update, setOemUpdate] = useState({
    oem_id: "",
    oem_name: "",
    oem_type: "",
    oem_logo: ""
  });

  const { oem_id, oem_name, oem_type, oem_logo } = oem_update;

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    const res = axios.get("http://13.233.237.220:8091/getOemdetails").then(res => {
      setOem({ ...oem, oemData: res.data });
    })
  }

  const deleteData = async (id) => {
    axios.delete(`https://cors-anywhere.herokuapp.com/http://13.233.237.220:8091/deleteOemDetailsByOemId?oem_id=${id}`, oem);
    fetchData();
  }

  const onInputChange = e => {
    setOemUpdate({ ...oem_update, [e.target.name]: e.target.value });
  };

  const onSubmit = async (id) => {
    const res = await axios.put(`http://13.233.237.220:8091/updateOemDetailsByOemID?oem_id=${id}`, oem_update);
    if (res.status == "200") {
      window.location.reload(false);
    }
  };


  return (
    // <!-- Begin Page Content -->
    <div class="container-fluid">

      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-2 text-gray-800">OEM  - Database</h1>
      <p class="mb-4"> Here is the full list of OEM.</p>

      {/* <!-- DataTales Example --> */}
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>

                  <th value="oem_id">OEM ID</th>
                  <th value="oem_name">OEM Name</th>
                  <th value="oem_type">OEM Type</th>
                  <th value="oem_logo">OEM Logo</th>
                  {/* <th value="productMasterRequestBean__procuct_name">Subsidiary Name(product_name)</th>
                  <th value="RnMCo_name">RnMCO</th> */}
                  <th value="">Action</th>
                </tr>
              </thead>
             
              <tbody>
                {oemData.map((oem, index) => (
                  <tr key={index}>
                    <td>{oem.oem_id}</td>
                    <td>{oem.oem_name}</td>
                    <td>{oem.oem_type}</td>
                    <td>{oem.oem_logo}</td>
                    {/* <td>{oem.oemSubSidiaryEntity && (
                      <div class="btn-group">

                        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Subsidiary Name
                      </button>
                        <div class="dropdown-menu">
                          {oem.oemSubSidiaryEntity.map((subsidiary, index) => (
                            <a class="dropdown-item" href="#" key={index}>{subsidiary.oem_sub_name}</a>
                          ))}
                        </div>
                      </div>
                    )}
                    </td>
                    <td>
                      {oem.rnMCoBeans != null && (
                        <div class="btn-group">
                          <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            RnMCO
                      </button>
                          <div class="dropdown-menu">

                            {oem.rnMCoBeans.map((rnMCo, index) => (
                              <a class="dropdown-item" href="#" key={index}>{rnMCo.rnMCoName}</a>
                            ))}
                          </div>
                        </div>
                      )}
                    </td> */}
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                      <Link to={`/edit/${oem.oem_id}`}>
                        <button type="button" class="btn btn-info">View</button>
                        </Link>
                      <button type="button" className="btn btn-success"
                        onClick={() =>
                          setOemUpdate({
                            ...oem_update, oem_id: oem.oem_id,
                            oem_name: oem.oem_name,
                            oem_logo: oem.oem_logo,
                            oem_type: oem.oem_type
                          })
                        }
                        data-toggle="modal" data-target="#exampleModal">Edit</button>
                      <button type="button" className="btn btn-danger" onClick={() => deleteData(oem.oem_id)}>Delete</button>

                    </div></td>
                  </tr>
                ))}
              </tbody>
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
              <form>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-group">
                          OEM ID
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="oem_id"
                            value={oem_id}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          OEM Name
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="oem_name"
                            value={oem_name}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group">
                          OEM Type
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="oem_type"
                            value={oem_type}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          OEM Logo
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="oem_logo"
                            value={oem_logo}
                            onChange={e => onInputChange(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <button type="button" onClick={(e) => onSubmit(oem_id)} className="btn btn-warning btn-block">Update User</button>
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

export default Tables;
