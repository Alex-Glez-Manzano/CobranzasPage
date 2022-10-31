import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CobranzasRoutes } from '../cobranzas/routes/CobranzasRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login  */}
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        {/* Cobranzas  */}
        <Route path="/*" element={<CobranzasRoutes />}/>

    </Routes>
  )
}
