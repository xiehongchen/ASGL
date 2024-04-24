import { lazy } from "react";
import lazyLoad from "./LazyLoad";
import { Navigate } from "react-router-dom";

const Layout = lazy(() => import('@/Layout'))
const Home = lazy(() => import('@/pages/home'))
const Video = lazy(() => import('@/pages/video'))

const routes = [
  {
    path: '/',
    element: lazyLoad(Layout),
    children: [
      {
        index: true,
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        index: true,
        path: '/home',
        element: lazyLoad(Home),
        title: '主页'
      },
      {
        index: true,
        path: '/video',
        element: lazyLoad(Video),
        title: '视频'
      },
    ]
  }
]

export default routes