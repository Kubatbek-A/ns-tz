import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

import Loader from '../components/Loader'
import { allFlattenRoutes as routes, RouteType } from './index'

export default function AllRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {routes.map((route: RouteType, index: number) => (
            <route.route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
