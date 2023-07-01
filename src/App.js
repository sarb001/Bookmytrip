// import React, { useEffect, useState } from 'react';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import axios from 'axios';
// import { DateRangePicker } from 'react-date-range';

// // functionality is - start date & end date is selected 
// // --- data from api contains data likename & date 
// // so to select specific location sort it 

// function App() {

//    const [startDate,setstartDate] = useState(new Date());
//    const [endDate,setendDate]     = useState(new Date());
//    const [products,setproducts]   = useState([]);
//    const [allproducts,setallproducts] = useState([]);

//   useEffect(() => { 
//      axios.get('https://my.api.mockaroo.com/products?key=fab29b70')
//       .then((res) => {
//         setproducts(res.data);
//         setallproducts(res.data);
//         console.log('prod is -',res.data);
//       })
//   },[]);

//     const handleclick = (date) => {
//           let filtered = allproducts.filter((prod) => {
//             let productDate  = new Date(prod.createdAt);
//             return  productDate >= date.selection.startDate && 
//              productDate <= date.selection.endDate; 
//           });

//           setstartDate(date.selection.startDate);
//           setendDate(date.selection.endDate);
//           console.log('filtered is -',filtered);
//           setproducts(filtered);
//     }

//      const selectionRange = {
//         startDate : startDate,
//         endDate : endDate,
//         key   : 'selection',
//         color: 'red'
//      };

//   return (
//     <>
//       <h2>  Helo there man Delhiss Here   </h2>
//     <div className="App" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
//         <div className = "text-center">
//            <DateRangePicker   ranges = {[selectionRange]}  onChange = {handleclick}  />
//         </div>
//          <div className="data-fetched">
//               <table>
//                 <thead>
//                   <tr>
//                     <th> Id </th>
//                     <th> Name</th>
//                     <th> CreatedAt - </th>
//                   </tr>
//                 </thead>
//                   <tbody>
//                     {products.map((item) => {
//                       let date = new Date(item.createdAt);
//                         return (
//                           <tr key = {item.id}>
//                                 <td>{item.id}  </td>  
//                                 <td> {item.first_name}  </td>  
//                                 <td> {date.toLocaleDateString()}  </td>
//                           </tr>
//                         ) 
//                       })}
//                   </tbody>
//               </table>
//          </div>
//     </div>
//     </>
//   );
// }

// export default App;


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

const App = () => {
  return (
    <>
     <Routes>
         <Route path='/' element = {<Home />}>  </Route>
     </Routes>
    </>
  )
}

export default App