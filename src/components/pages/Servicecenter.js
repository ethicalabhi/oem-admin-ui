
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Servicecenter = () => {

    const [oem, setOem] = useState({
        oemData: []
      });
      console.log(oem.oemData);
    
      const { oemData } = oem;
    
      const [oem_update, setOemUpdate] = useState({
        service_centre_id: "",
        service_centre_name: "",
        oem_master_id: "",
        oem_subsidiary_id: ""
      });
    
      const { service_centre_id, service_centre_name, oem_master_id, oem_subsidiary_id   } = oem_update;
    
      useEffect(() => {
        fetchData();
      }, [])
    
      const fetchData = () => {
        const res = axios.get("http://13.233.237.220:8091/getServiceCenterDetails").then(res => {
          setOem({ ...oem, oemData: res.data });
        })
      }

      const deleteData = async (id) => {
        axios.delete(`http://13.233.237.220:8091/deleteServiceCenterDetails?service_centre_id=${id}`, oem);
        fetchData();
      }



    return (
        // <!-- Begin Page Content -->
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 class="h3 mb-2 text-gray-800">Service Centre - Database</h1>
            <p class="mb-4">Here is the full list of Service Centre.</p>

            {/* <!-- DataTales Example --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Records</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th value="service_centre_id">Service Center ID</th>
                                    <th value="service_centre_name">Service Center Name</th>

                                    <th value="oem_master_id">OEM ID</th>
                                    <th value="oem_subsidiary_id">Subsidiary ID</th>
                                    <th value="oem_type">Service Slot</th>
                                    <th value="">Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {oemData.map((oem, index) => (
                                <tr key={index}>
                                    <td>{oem.service_centre_id}</td>
                                    <td>{oem.service_centre_name}</td>

                                    <td>{oem.oem_master_id}</td>
                                    <td>{oem.oem_subsidiary_id}</td>
                                    <td>

                                        <div class="panel-group">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h5 class="panel-title">
                                                        <a data-toggle="collapse" href="#collapse1">Time Slot</a>
                                                    </h5>
                                                </div>
                                                <div id="collapse1" class="panel-collapse collapse">


                                                    <table class="table table-bordered" id="dataTable" width="50%" cellspacing="0">
                                                        <thead>
                                                            <tr>
                                                                <th value="oem_id">Slot Begin</th>
                                                                <th value="oem_name">Slot End</th>
                                                                <th value="oem_type">Slot Period</th>
                                                                <th value="oem_type">Date</th>
                                                                <th value="oem_type">Slot Booked</th>
                                                                <th value="oem_type">Service Assignee</th>
                                                                <th value="oem_type">Status</th>

                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>20OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>20OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>20OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>

							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>21OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>21OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>21OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
							    
							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>22OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>22OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>22OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>

							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>23OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>23OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>23OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>

							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>24OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>24OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>24OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
							   
							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>25OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>25OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>25OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
								
							    <tr>
                                                                <td>10</td>
                                                                <td>1</td>
                                                                <td>3</td>
                                                                <td>26OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>4</td>
                                                                <td>3</td>
                                                                <td>26OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>7</td>
                                                                <td>3</td>
                                                                <td>26OCT2020</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                                <td>String</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>


                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td><div class="btn-group">
                                        {/* <button type="button" class="btn btn-info" aria-haspopup="true" aria-expanded="false">
                                            View
                                         </button> */}
                                        <button type="button" class="btn btn-success" aria-haspopup="true" aria-expanded="false">
                                            Edit
                                         </button><div class="btn-group">
                                         <button type="button" className="btn btn-danger" onClick={() => deleteData(oem.service_centre_id)}>Delete</button>
                                        </div>
                                    </div>
                                    </td>
                                </tr>


))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        // <!-- /.container-fluid -->
    )
}

export default Servicecenter;
