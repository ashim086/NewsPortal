import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import SingleNews from './Pages/SingleNews.jsx'
import Authorization from './Pages/Authorization.jsx'
import { ToastContainer } from 'react-toastify'
import CreatePost from './Pages/Journalist/CreatePost.jsx'
import AdminPanel from './Pages/Admin/AdminPanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/news/:id' element={<SingleNews />} />

        <Route path='/' element={<Authorization />} />

        <Route path='/AdminPanel' element={<AdminPanel />} />

        <Route path='/createpost' element={<CreatePost />} />

      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
