import { useEffect, useState } from 'react'
// import Header from './components/Header'
// import Body from './components/Body'
import './App.css'
import axios from 'axios'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div className='w-[100%]'>
//     <Header/>
//     <Body/>
//    </div>
//   )
// }


const App = () => {
  
  const [data, setData] = useState(null)

  useEffect(()=>{
    axios.get('/')
    .then(res=>{
      console.log(res)
      setData(res.data)
    }
    )
  }, [])
  
  console.log("Data")
  console.log(data)

  return (
    <div>
      <div>Data</div>
      <h1>hello</h1>
      {/* {data && data.map(item=>(
        <div>{item}</div>
      ))} */}
    </div>
  )
}


export default App
