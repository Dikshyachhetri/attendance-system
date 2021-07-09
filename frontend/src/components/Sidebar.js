import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div class="d-flex justify-content-between">
            <div className="sidebar">
                <div className="logo flex-all justify-content-around m-3">
                    <img src="images/logo-colorful.svg" alt=""></img>
                    <span>FeatherWebs</span>
                </div>
                <ul>
                    <li>
                        <Link to="#" className="sidebar-items">
                            <img src="images/dashboard.svg" alt=""></img>
                            <p> Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/employee" className="sidebar-items">
                            <img src="images/employee.svg" alt=""></img>
                            <p> Employee</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar" className="sidebar-items">
                            <img src="images/calendar.svg" alt=""></img>
                            <p> Calendar</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/leave" className="sidebar-items">
                            <img src="images/leave.svg" alt=""></img>
                            <p> Leave</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/record" className="sidebar-items">
                            <img src="images/record.svg" alt=""></img>
                            <p> Record</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
































// import React from 'react'
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//     return (
//         <div
//       style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#333" className="sidebar-area">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: 'inherit' }}
//           >
//             FeatherWebs
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/employees" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Employees</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/calendar" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/leave" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="sign-out-alt">
//                 Leave
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/record" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="file-alt">Record</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             <button type="button" class="btn btn-light">Contact Admin</button>
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//     )
// }

// export default Sidebar
