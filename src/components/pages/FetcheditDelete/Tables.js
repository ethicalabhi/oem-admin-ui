import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';

// $.DataTable = DataTable

const Tables = () => {

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'OEM ID',
        field: 'oem_id',
        sort: 'disabled',
        width: 200
      },
      {
        label: 'OEM Name',
        field: 'oem_name',
        sort: 'disabled',
        width: 200
      },
      {
        label: 'OEM Type',
        field: 'oem_type',
        sort: 'disabled',
        width: 200
      },
      {
        label: 'OEM Logo',
        field: 'oem_logo',
        sort: 'disabled',
        width: 200
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
      }
    ],
    rows: []
  });

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
    axios.get("http://13.233.237.220:8091/getOemdetails").then(res => {
      const row = [];
      res.data.map((oem, index) => (
        row.push({oem_id: oem.oem_id, oem_name: oem.oem_name, oem_type: oem.oem_type, oem_logo: oem.oem_logo, action: <div className="btn-group" role="group" aria-label="Basic example"> <Link to={`/edit/${oem.oem_id}`}> <button type="button" className="btn btn-info">View</button> </Link><button type="button" className="btn btn-success" onClick={() => setOemUpdate({...oem_update, oem_id: oem.oem_id,oem_name: oem.oem_name,oem_logo: oem.oem_logo,oem_type: oem.oem_type})} data-toggle="modal" data-target="#exampleModal">Edit</button> <button type="button" className="btn btn-danger" onClick={() => deleteData(oem.oem_id)}>Delete</button> </div> })
      ));
      if(row) {
        setDatatable({ ...datatable, rows: row });
        console.log("Datatable ::: ", datatable)
      }
    })
  }

  const deleteData = async (id) => {
    axios.delete(`http://13.233.237.220:8091/deleteOemDetailsByOemId?oem_id=${id}`);
    fetchData();
  }

  const onInputChange = e => {
    setOemUpdate({ ...oem_update, [e.target.name]: e.target.value });
  };

  const onSubmit = async (id) => {
    const res = await axios.put(`http://13.233.237.220:8091/updateOemDetailsByOemID?oem_id=${id}`, oem_update);
    if (res.status === "200") {
      window.location.reload(false);
    } 
  };


  return (
    <>
    {/* // <!-- Begin Page Content --> */}
    <div className="container-fluid">

      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">OEM - Database</h1>
      <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="blank" href="https://datatables.net">official DataTables documentation</a>.</p>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
              <MDBDataTableV5 hover striped bordered paging={true} data={datatable} />
          </div>
        </div>
      </div> 



       
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
                 <table className="table table-bordered" id="dataTable" width="100%">
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
                 </table>
                   <button type="button" onClick={(e) => onSubmit(oem_id)} className="btn btn-warning btn-block">Update User</button>
               </form>
             </div>
           </div>
         </div>
       </div>
       </>
    // {/* // <!-- /.container-fluid --> */}
  )
}

export default Tables;
