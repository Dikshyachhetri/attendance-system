import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div class="Container d-flex justify-content-between">
            <section class="sidebar">
                <div class="logo">
                    <img src="logo.png" alt=""></img>
                    <span>FeatherWebs</span>
                </div>
                <ul>
                    <li>
                        <Link to="#" className="sidebar-items">
                            <img src="images/dashboard.png" alt=""></img>
                            <p> Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/employee" className="sidebar-items">
                            <img src="images/employee.png" alt=""></img>
                            <p> Employee</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar" className="sidebar-items">
                            <img src="images/calendar.png" alt=""></img>
                            <p> Calendar</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/leave" className="sidebar-items">
                            <img src="images/leave.png" alt=""></img>
                            <p> Leave</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/record" className="sidebar-items">
                            <img src="images/record.png" alt=""></img>
                            <p> Record</p>
                        </Link>
                    </li>
                </ul>
            </section>
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
