import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import { isUserAuthenticated } from '../lib/authUtils'

const Home = React.lazy(() => import('../pages/home'))
const Login = React.lazy(() => import('../pages/login'))
const Register = React.lazy(() => import('../pages/register'))

type Props = {
  children: JSX.Element
}

export type RouteType = {
  path: string
  exact: boolean
  route: any
  element: JSX.Element
}

const PrivateRoute = ({ children }: Props) => {
  const loggedInUser = isUserAuthenticated()
  return loggedInUser ? children : <Navigate to="/login" />
}

const homeRoute = {
  path: '/',
  exact: false,
  element: (
    <PrivateRoute>
      <Home />
    </PrivateRoute>
  ),
  route: Route,
}

const signInRoute = {
  path: '/login',
  exact: true,
  element: <Login />,
  route: Route,
}

const signUpRoute = {
  path: '/register',
  exact: true,
  element: <Register />,
  route: Route,
}

const flattenRoutes = (routes: Array<RouteType>) => {
  const flatRoutes: Array<RouteType> = []

  routes = routes || []
  routes.forEach((item: RouteType) => {
    flatRoutes.push(item)
  })
  return flatRoutes
}

const allRoutes = [homeRoute, signInRoute, signUpRoute]

const allFlattenRoutes = flattenRoutes(allRoutes)
export { allFlattenRoutes }
