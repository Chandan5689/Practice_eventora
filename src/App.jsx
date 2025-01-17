import { useEffect, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
   <div className='w-[100%]'>
    <Header/>
    <Body/>
   </div>
  )
}
// import React, { useEffect, useState } from 'react';
// import { getData } from './services/api';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData();
//         setData(result);
//       } catch (error) {
//         console.error('Failed to fetch data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1></h1>
//       {data ? (
//         <ul>
//           {data.data.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       ) : (
//         <p></p>
//       )}
//     </div>
//   );
// };




// const App = () => {
  
//   const [data, setData] = useState(null)

//   useEffect(()=>{
//     axios.get('/')
//     .then(res=>{
//       console.log(res)
//       setData(res.data)
//     }
//     )
//   }, [])
  
//   console.log("Data")
//   console.log(data)

//   return (
//     <div>
//       <div>Data</div>
//       <h1>hello</h1>
//       {/* {data && data.map(item=>(
//         <div>{item}</div>
//       ))} */}
//     </div>
//   )
// }


export default App
