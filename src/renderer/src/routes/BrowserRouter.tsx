import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './Routes'
import Login from '@renderer/modules/Login'
import Reward from '@renderer/modules/Reward'
import SiteLayout from '@renderer/components/layout/SiteLayout'

export default function BrowserRouter() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.default} element={<Login />}></Route>
        <Route
          path={ROUTES.reward}
          element={
            <SiteLayout>
              <Reward />
            </SiteLayout>
          }
        ></Route>
      </Routes>
    </Router>
  )
}
