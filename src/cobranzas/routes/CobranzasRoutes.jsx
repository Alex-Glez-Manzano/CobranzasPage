import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CobranzasPage } from '../pages/CobranzasPage'

export const CobranzasRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CobranzasPage/>}/>

        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
