import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded pt-0 pb-0" style={{ width: '100%' }}>
      <a className="navbar-brand" href="#">
        <h1 style={{ color: "red" }}>🍕PizzaSphere</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded pt-0 pb-0  " style={{  width: '100%' }} >
      
//         <a className="navbar-brand" href="#">
//           <h1 style={{ color: "red" }}>WELL PIZZA</h1>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Login <span className="sr-only"></span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Cart
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
