import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

const Profile = lazy(() => import('./Profile.jsx'))
const Dashboard = () => <div className="p-3 bg-info text-white rounded">📊 Dashboard Section</div>
const Settings = () => <div className="p-3 bg-warning text-dark rounded">⚙️ Settings Section</div>

function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
