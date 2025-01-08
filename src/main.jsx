import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes,  } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import EventDetail from './components/EventDetail.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>} />
      <Route path='EventDetail' element={<EventDetail/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
