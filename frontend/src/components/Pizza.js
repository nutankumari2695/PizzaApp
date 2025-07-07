import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Pizza = ({ pizza }) => {
  const [Quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  // Functions to handle modal visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='m-1 shadow-lg p-3 mb-5 bg-white rounded'>

      <div onClick={handleShow}>
        <h2><b>{pizza.name}</b></h2>
        <img src={pizza.image} className="img-fluid" style={{ height: "200px", width: "300px" }} alt={`${pizza.name} pizza`} />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select className="form-control" value={variant} onChange={(e) => setVariant(e.target.value)}>
            {pizza.variants.map((variant, index) => (
              <option key={index} value={variant}>{variant}</option>
            ))}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select className="form-control" value={Quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[...Array(10).keys()].map((x, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h5 className='mt-1'>Price: {pizza.prices[variant] * Quantity} Rs/-</h5>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-primary"><b>Add To Cart</b></button>
        </div>
      </div>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{pizza.description}</p>
          <img src={pizza.image} className="img-fluid  "  alt={`${pizza.name} pizza`} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;





// import React, { useState } from 'react';
// import {Modal} from 'react-bootstrap';

// const Pizza = ({ pizza }) => {
//   const [Quantity, setQuantity] = useState(1);
//   const [variant, setVariant] = useState("small");

//   return (
//     <div className='m-1 shadow-lg p-3 mb-5 bg-white rounded' >
//       {/* style={{ margin: '67px' }} */}

//       <div onClick={handleshow}>
//       <h2><b>{pizza.name}</b></h2>
//       <img src={pizza.image} className="img-fluid" style={{ height: "200px", width: "300px" }} alt={`${pizza.name} pizza`} />
//       </div>

//       <div className="flex-container">
//         <div className="w-100 m-1">
//           <p>Variants</p>
//           <select className="form-control" value={variant} onChange={(e) => setVariant(e.target.value)}>
//             {pizza.variants.map((variant, index) => (
//               <option key={index} value={variant}>{variant}</option>
//             ))}
//           </select>
//         </div>

//         <div className="w-100 m-1">
//           <p>Quantity</p>
//           <select className="form-control" value={Quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
//             {[...Array(10).keys()].map((x, i) => (
//               <option key={i} value={i + 1}>{i + 1}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="flex-container">
//         <div className="m-1 w-100">
//           <h5 className='mt-1'>Price: {pizza.prices[variant] * Quantity} Rs/-</h5>
//         </div>
//         <div className="m-1 w-100">
//           <button className="btn btn-primary"><b>Add To Cart</b></button>
//         </div>
//       </div>


//       <Modal show={show}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button className='btn' onClick='handleClose'>Close</Button>
//           {/* <Button variant="primary">Save changes</Button> */}
//         </Modal.Footer>
//       </Modal>


//     </div>
//   );
// };

// export default Pizza;














// import React,{useState} from 'react'
// import pizzas from '../pizzadata';


// const Pizza = ({ pizza }) => {
//   const [Quantity,setquantity]= useState(1);
//   const [variant,setvarient]= useState("small");
//   return (
//     <div>
//       <h2><b>{pizza.name}</b></h2>
//       <img src={pizza.image} className='img-fluid' style={{ height: "200px", width: "300px" }} alt={`${pizza.name} pizza`} />
//       <div className='flex-container'>
   
//         <div className='w-100'>
//           <p>Variants</p>
//           <select  value={variant} onChange={(e)=>{setvarient(e.target.value)}}>
//             {pizza.variants.map((variant, index) => {
//               return <option key={index} value={variant}>{variant}</option>
//             })}
//           </select>
//         </div>

//         <div className='w-100'>
//           <p>Quantity</p>
//           <select value={Quantity} onChange={(e)=>{setquantity(e.target.value)}}>
//             {[...Array(10).keys()].map((x,i)=>{
//               return <option value={i*1}>{i+1}</option>
//             })}
//           </select>
//         </div>

//       </div>
//       <div className='flex-container'>
//         <div>
//           <h1>Price : {pizza.prices[0][variant] * Quantity}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Pizza
