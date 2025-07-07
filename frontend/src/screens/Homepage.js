// import React,{useState,useEffect} from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { getAllPizzas } from '../actions/pizzaActions'
import pizzas from '../pizzadata'
import Pizza from '../components/Pizza'

const Homepage = () => {
//   const dispatch = useDispatch()
//   useEffect(() =>{
//     dispatch(getAllPizzas())
//   },[])
  return (
    <>
      <div>
        <div className='row'>
          {pizzas.map((pizza, index) => {
            return (
              <div className='col-md-4' key={index}> 
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Homepage;








// import React from 'react'
// import pizzas from '../pizzadata'
// import Pizza from '../components/Pizza'

// const Homepage = () => {
//   return (
//     <>
//       <div>
//         <div className='row'>
//           {pizzas.map((pizza) => {
//             return (
//               <div className='col-md-4' key={pizza.id}> 
//                 <div>
//                   <Pizza pizza={pizza} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Homepage;










// import React from 'react'
// import pizzas from '../pizzadata'
// import Pizza from '../components/Pizza'

// const Homepage = () => {
//   return (
//     <>
//       <div>
//         <div className='row'>
//           {pizzas.map((pizza) => {
//             return (
//               <div className='col-md-4' > 
//               <div>
//                 <Pizza pizza={pizza} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Homepage
