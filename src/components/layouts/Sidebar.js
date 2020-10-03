import React from "react";
import {
    Link,
    Router
  } from "react-router-dom";
  
  

const Sidebar = () => {
    return (
        // <!-- Sidebar -->
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          {/* <!-- Sidebar - Brand --> */}
         
          
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href='/'>
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Ping OEM</div>
          </a>
         
          
    
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0"/>
    
          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>  Dashboard</span></a>
          </li>
    
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider"/>
    
          {/* <!-- Heading --> */}
          {/* <div className="sidebar-heading">
            Interface
          </div> */}
    
          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>Components</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="/bbuttons">Buttons</a>
                <a className="collapse-item" href="/bcards">Cards</a>
              </div>
            </div>
          </li> */}
    
          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            {/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
              </a>
              <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="/color">Colors</a>
                  <a className="collapse-item" href="/border">Borders</a>
                  <a className="collapse-item" href="/animation">Animations</a>
                  <a className="collapse-item" href="/others">Other</a>
                </div>
              </div>
            </li> */}
    
          {/* <!-- Divider --> */}
          {/* <hr className="sidebar-divider"/> */}
    
          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
            Actions
          </div>
    
          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          {/* <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="/login">Login</a>
                <a className="collapse-item" href="/register">Register</a>
                <a className="collapse-item" href="/forgot-password">Forgot Password</a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="/error">404 Page</a>
                <a className="collapse-item" href="/blank">Blank Page</a>
              </div>
            </div>
          </li> */}
    
        {/* <!-- Nav Item - Charts --> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="/charts">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span></a>
          </li>  */}

          {/* <!-- Nav Item - Tables --> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="/login">
              <i className="fas fa-fw fa-table"></i>
              <span>Login</span></a>
          </li> */}
    
          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
            <a className="nav-link" href="/tables">
              <i className="fas fa-fw fa-table"></i>
              <span>OEM Records</span></a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
            <a className="nav-link" href="/servicecenter">
              <i className="fas fa-fw fa-table"></i>
              <span>Service Center</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block"/>
    
          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
    
        </ul>
        /* <!-- End of Sidebar --> */
    )
}

export default Sidebar;