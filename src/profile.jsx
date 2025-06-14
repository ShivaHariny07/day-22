import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
  const tabStyle = ({ isActive }) =>
    `btn me-2 ${isActive ? 'btn-outline-primary' : 'btn-outline-secondary'}`

  return (
    <div>
      <h2 className="text-center text-xl font-semibold text-purple-600 mb-3">👤 Profile Section</h2>
      <div className="mb-3 text-center">
        <NavLink to="dashboard" className={tabStyle}>Dashboard</NavLink>
        <NavLink to="settings" className={tabStyle}>Settings</NavLink>
      </div>
      <div className="card p-3 shadow-sm">
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Profile)
